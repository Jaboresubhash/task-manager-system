// const BASE_URL = "http://localhost:5000";

// export const api = {
//   register: async (data: any) => {
//     const res = await fetch(`${BASE_URL}/auth/register`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     });
//     return res.json();
//   },

//   login: async (data: any) => {
//     const res = await fetch(`${BASE_URL}/auth/login`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     });
//     return res.json();
//   },
//   getTasks: async () => {
//   const token = localStorage.getItem("token");

//   const res = await fetch(`${BASE_URL}/tasks`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   return res.json();
//  },
// };
// // Create task =======
// createTask: async (data: any) => {
//   const token = localStorage.getItem("token");

//   const res = await fetch(`${BASE_URL}/tasks`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify(data),
//   });

//   return res.json();
// }

const BASE_URL = "http://localhost:5000";

export const api = {
  register: async (data: any) => {
    const res = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return res.json();
  },

  login: async (data: any) => {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return res.json();
  },

  // ✅ GET TASKS
  getTasks: async () => {
    const token = localStorage.getItem("token");

    const res = await fetch(`${BASE_URL}/tasks`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.json();
  },

  // ✅ CREATE TASK
  createTask: async (data: any) => {
    const token = localStorage.getItem("token");

    const res = await fetch(`${BASE_URL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    return res.json();
  },

  // ✅ UPDATE TASK
  updateTask: async (id: number, data: any) => {
    const token = localStorage.getItem("token");

    const res = await fetch(`${BASE_URL}/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    return res.json();
  },

  // ✅ DELETE TASK
  deleteTask: async (id: number) => {
    const token = localStorage.getItem("token");

    await fetch(`${BASE_URL}/tasks/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};