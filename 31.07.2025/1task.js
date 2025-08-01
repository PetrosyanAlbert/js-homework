class User {
  constructor(data) {
    this.d = data;
  }

  getUserData() {
    return this.d;
  }
}

class UserProfile {
  constructor(user) {
    this.user = user;
  }

  renderProfile() {
    const div = document.createElement("div");
    div.innerHTML = `
      <h2>${this.user.name}</h2>
      <p>${this.user.email}</p>
    `;
    document.body.appendChild(div);
  }
}