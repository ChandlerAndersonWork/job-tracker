export default function ApplicationsTable({ applications }) {
    if (!applications.length) {
        return <p>No applications yet.</p>
    }
    return (
        <table border = "1" cellPadding = "8" style = {{ marginTop: "1rem" }}>
            <thead>
                <tr>
                    <th>Company</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Applied Date</th>
                    <th>Notes</th>
                </tr>
            </thead>
            <tbody>
                {applications.map((app) => (
                    <tr key={app.id}>
                        <td>{app.company}</td>
                        <td>{app.role}</td>
                        <td>{app.status}</td>
                        <td>{app.appliedDate || "-"}</td>
                        <td>{app.notes || "-"}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}