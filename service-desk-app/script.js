const firebaseConfig = {
  apiKey: "AIzaSyCG7rTYaJpuWo5cnZqSLFmhAe06kdlq-OY",
  authDomain: "servicedesk-1e16e.firebaseapp.com",
  projectId: "servicedesk-1e16e",
  storageBucket: "servicedesk-1e16e.appspot.com",
  messagingSenderId: "615400388284",
  appId: "1:615400388284:web:5f6276e213e69f747b2aa9"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

const registerForm = document.getElementById("register-form");
const loginForm = document.getElementById("login-form");
const ticketForm = document.getElementById("ticket-form");
const logoutBtn = document.getElementById("logout");
const userDashboard = document.getElementById("user-dashboard");
const adminDashboard = document.getElementById("admin-dashboard");
const userTickets = document.getElementById("user-tickets");
const allTickets = document.getElementById("all-tickets");

registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = registerForm["register-email"].value;
  const password = registerForm["register-password"].value;
  const role = registerForm["register-role"].value;

  try {
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;

    await db.collection("users").doc(user.uid).set({
      email,
      role,
    });

    alert("Registration successful!");
    registerForm.reset();
  } catch (error) {
    alert(error.message);
  }
});

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = loginForm["login-email"].value;
  const password = loginForm["login-password"].value;

  try {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    const user = userCredential.user;
    const userDoc = await db.collection("users").doc(user.uid).get();
    const userData = userDoc.data();

    if (userData.role === "admin") {
      userDashboard.style.display = "none";
      adminDashboard.style.display = "block";
      listenToAllTickets();
    } else {
      userDashboard.style.display = "block";
      adminDashboard.style.display = "none";
      listenToUserTickets(user.email);
    }

    loginForm.reset();
  } catch (error) {
    alert(error.message);
  }
});

ticketForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const issueDescription = ticketForm["issue-description"].value;
  const priority = ticketForm["priority"].value;
  const category = ticketForm["category"].value;
  const user = auth.currentUser;

  try {
    await db.collection("tickets").add({
      email: user.email,
      issueDescription,
      priority,
      category,
      status: "Open",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      replies: [],
    });

    alert("Ticket submitted successfully!");
    ticketForm.reset();
  } catch (error) {
    alert(error.message);
  }
});

logoutBtn.addEventListener("click", async () => {
  try {
    await auth.signOut();
    userDashboard.style.display = "none";
    adminDashboard.style.display = "none";
  } catch (error) {
    alert(error.message);
  }
});

function listenToUserTickets(userEmail) {
  db.collection("tickets")
    .where("email", "==", userEmail)
    .orderBy("timestamp", "desc")
    .onSnapshot((snapshot) => {
      userTickets.innerHTML = "";
      snapshot.forEach((doc) => {
        const ticket = doc.data();
        const li = document.createElement("li");
        li.innerHTML = `
          <strong>Issue:</strong> ${ticket.issueDescription}<br>
          <strong>Status:</strong> ${ticket.status} | <strong>Priority:</strong> ${ticket.priority}<br>
          <strong>Replies:</strong><br>
          <ul>${(ticket.replies || []).map(reply => `<li>${reply}</li>`).join('')}</ul>
          <textarea placeholder="Add a reply..." rows="2" style="width:100%;"></textarea>
          <button class="reply-btn" data-id="${doc.id}">Send Reply</button>
        `;
        li.style.marginBottom = "10px";
        userTickets.appendChild(li);
      });

      document.querySelectorAll('.reply-btn').forEach(button => {
        button.addEventListener('click', async (e) => {
          const ticketId = e.target.getAttribute('data-id');
          const textarea = e.target.previousElementSibling;
          const reply = textarea.value.trim();
          if (reply) {
            try {
              await db.collection('tickets').doc(ticketId).update({
                replies: firebase.firestore.FieldValue.arrayUnion(`User: ${reply}`)
              });
              textarea.value = '';
            } catch (error) {
              alert('Error sending reply: ' + error.message);
            }
          }
        });
      });
    });
}

function listenToAllTickets() {
  db.collection("tickets")
    .orderBy("timestamp", "desc")
    .onSnapshot((snapshot) => {
      allTickets.innerHTML = "";
      snapshot.forEach((doc) => {
        const ticket = doc.data();
        const li = document.createElement("li");
        li.innerHTML = `
          <div style="border:1px solid #ccc; border-radius:8px; padding:10px;">
            <strong>User:</strong> ${ticket.email}<br>
            <strong>Issue:</strong> ${ticket.issueDescription}<br>
            <strong>Priority:</strong> ${ticket.priority}<br>
            <strong>Status:</strong>
            <select class="status-select" data-id="${doc.id}">
              <option value="Open" ${ticket.status === 'Open' ? 'selected' : ''}>Open</option>
              <option value="In Progress" ${ticket.status === 'In Progress' ? 'selected' : ''}>In Progress</option>
              <option value="Resolved" ${ticket.status === 'Resolved' ? 'selected' : ''}>Resolved</option>
              <option value="Closed" ${ticket.status === 'Closed' ? 'selected' : ''}>Closed</option>
            </select><br>
            <strong>Replies:</strong>
            <ul>${(ticket.replies || []).map(reply => `<li>${reply}</li>`).join('')}</ul>
            <textarea placeholder="Reply as Admin..." rows="2" style="width:100%;"></textarea>
            <button class="admin-reply-btn" data-id="${doc.id}">Reply</button>
          </div>
        `;
        li.style.marginBottom = "10px";
        allTickets.appendChild(li);
      });

      document.querySelectorAll(".status-select").forEach((select) => {
        select.addEventListener("change", async (e) => {
          const ticketId = e.target.getAttribute("data-id");
          const newStatus = e.target.value;

          try {
            await db.collection("tickets").doc(ticketId).update({
              status: newStatus,
            });
          } catch (error) {
            alert(error.message);
          }
        });
      });

      document.querySelectorAll('.admin-reply-btn').forEach(button => {
        button.addEventListener('click', async (e) => {
          const ticketId = e.target.getAttribute('data-id');
          const textarea = e.target.previousElementSibling;
          const reply = textarea.value.trim();
          if (reply) {
            try {
              await db.collection('tickets').doc(ticketId).update({
                replies: firebase.firestore.FieldValue.arrayUnion(`Admin: ${reply}`)
              });
              textarea.value = '';
            } catch (error) {
              alert('Error sending admin reply: ' + error.message);
            }
          }
        });
      });
    });
}
