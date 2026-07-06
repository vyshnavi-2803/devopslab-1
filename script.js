const form = document.getElementById("registrationForm");

const userList = document.getElementById("userList");

const message = document.getElementById("message");

let users = [];

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const phone = document.getElementById("phone").value.trim();

    if (name === "" || email === "" || phone === "") {

        message.style.color = "red";

        message.innerHTML = "Please fill all fields.";

        return;
    }

    const user = {

        id: users.length + 1,

        name,

        email,

        phone

    };

    users.push(user);

    displayUsers();

    message.style.color = "green";

    message.innerHTML = "✅ Registration Successful!";

    form.reset();
});

function displayUsers() {

    userList.innerHTML = "";

    users.forEach((user) => {

        userList.innerHTML += `

        <div class="card">

            <p><strong>🆔 ID:</strong> ${user.id}</p>

            <p><strong>👤 Name:</strong> ${user.name}</p>

            <p><strong>📧 Email:</strong> ${user.email}</p>

            <p><strong>📱 Phone:</strong> ${user.phone}</p>

        </div>

        `;

    });

}