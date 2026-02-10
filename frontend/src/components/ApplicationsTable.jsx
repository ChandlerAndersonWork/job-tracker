import { updateApplication, deleteApplication } from "../api/applications";

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
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {applications.map((app) => (
                    <tr key={app.id}>
                        <td>{app.company}</td>
                        <td>{app.role}</td>
                        <td>
                            <select
                                value = {app.status}
                                onChange = {async (e) => {
                                    await updateApplication(app.id, { status: e.target.value, });
                                    window.location.reload();
                                    // const updated = await updateApplication(app.id, {
                                    //     status: e.target.value,
                                    // });
                                    // window.location.reload();
                                }}
                            >
                                <option>Applied</option>
                                <option>Interview</option>
                                <option>Offer</option>
                                <option>Rejected</option>
                            </select>
                        </td>
                        <td>{app.appliedDate || "-"}</td>
                        <td>{app.notes || "-"}</td>
                        <td>
                            <button
                                onClick = {async () => {
                                    await deleteApplication(app.id);
                                    window.location.reload();
                                }}
                            >Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}