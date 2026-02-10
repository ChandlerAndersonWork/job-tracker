const BASE_URL = "http://localhost:5000/api/applications";

export async function fetchApplications() {
    const res = await fetch(BASE_URL);
    if (!res.ok) {
        throw new Error("Failed to fetch applications");
    }
    return res.json();
}

export async function createApplication(data) {
    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to create application");
    }

    return res.json();
}

export async function updateApplication(id, data) {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Failed to update");

    return res.json();
}

export async function deleteApplication(id) {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
    });

    if (!res.ok) throw new Error("Failed to delete");
}