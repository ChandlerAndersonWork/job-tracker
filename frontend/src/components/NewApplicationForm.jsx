import { useState } from "react";
import { createApplication } from "../api/applications";

export default function NewApplicationForm({ onCreated }) {
    const [company, setCompany] = useState("");
    const [role, setRole] = useState("");
    const [status, setStatus] = useState("Applied");
    const [appliedDate, setAppliedDate] = useState("");
    const [notes, setNotes] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setError(null);
        setLoading(true);
        
        try {
            const newApp = await createApplication({
                company,
                role,
                status,
                appliedDate: appliedDate || null,
                notes: notes || null,
            });

            onCreated(newApp);

            setCompany("");
            setRole("");
            setStatus("Applied");
            setAppliedDate("");
            setNotes("");
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
            <h3>Add Application</h3>

            {error && <p style = {{ color: "red" }}>{error}</p>}

            <div>
                <input
                    placeholder = "Company"
                    value = {company}
                    onChange = {(e) => setCompany(e.target.value)}
                    required
                />
            </div>

            <div>
                <input
                    placeholder = "Role"
                    value = {role}
                    onChange = {(e) => setRole(e.target.value)}
                    required
                />
            </div>

            <div>
                <select value = {status} onChange = {(e) => setStatus(e.target.value)}>
                    <option>Applied</option>
                    <option>Interview</option>
                    <option>Offer</option>
                    <option>Rejected</option>
                </select>
            </div>

            <div>
                <input
                    type = "date"
                    value = {appliedDate}
                    onChange = {(e) => setAppliedDate(e.target.value)}
                />
            </div>

            <div>
                <textarea
                    placeholder = "Notes"
                    value = {notes}
                    onChange = {(e) => setNotes(e.target.value)}
                />
            </div>

            <button disabled = {loading}>
                {loading ? "Saving..." : "Add Application"}
            </button>
        </form>
    );
}