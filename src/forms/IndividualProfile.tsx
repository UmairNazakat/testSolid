import { createStore } from 'solid-js/store';

const IndividualProfile = () => {
    const [form, setForm] = createStore({
        name: '',
        fatherOrHusband: '',
        cnic: '',
        dob: '',
        gender: '',
        qualification: '',
        experience: '',
        profession: '',
        district: '',
        email: '',
        contact: '',
        permanentAddress: '',
        mailingAddress: '',
        workHistory: [{ from: '', to: '', details: '' }],
        educationHistory: [{ degree: '', institution: '', from: '', to: '' }],
    });

    const handleSubmit = (e: Event) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <form onSubmit={handleSubmit} class="max-w-3xl mx-auto p-4 space-y-4">
            <h2 class="text-xl font-semibold">Individual's Profile</h2>

            <input
                class="w-full border p-2 uppercase"
                placeholder="Applicant’s Name"
                value={form.name}
                onInput={(e) => setForm('name', e.currentTarget.value)}
            />

            <input
                class="w-full border p-2 uppercase"
                placeholder="Father’s/Husband’s Name"
                value={form.fatherOrHusband}
                onInput={(e) => setForm('fatherOrHusband', e.currentTarget.value)}
            />

            <input
                class="w-full border p-2"
                placeholder="CNIC Number"
                value={form.cnic}
                onInput={(e) => setForm('cnic', e.currentTarget.value)}
            />

            <input
                class="w-full border p-2"
                type="date"
                value={form.dob}
                onInput={(e) => setForm('dob', e.currentTarget.value)}
            />

            <select class="w-full border p-2" value={form.gender} onChange={(e) => setForm('gender', e.currentTarget.value)}>
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
            </select>

            <input
                class="w-full border p-2"
                placeholder="Educational Qualification"
                value={form.qualification}
                onInput={(e) => setForm('qualification', e.currentTarget.value)}
            />

            <select
                class="w-full border p-2"
                value={form.experience}
                onChange={(e) => setForm('experience', e.currentTarget.value)}>
                <option value="">Relevant Experience in Years</option>
                <option>1-3</option>
                <option>4-5</option>
                <option>6-8</option>
                <option>9-10</option>
                <option>11-13</option>
                <option>13+</option>
            </select>

            <select
                class="w-full border p-2"
                value={form.profession}
                onChange={(e) => setForm('profession', e.currentTarget.value)}>
                <option value="">Current Profession</option>
                <option>Business</option>
                <option>Private Job</option>
                <option>Govt Job</option>
                <option>Unemployed</option>
                <option>Retired</option>
                <option>Other</option>
            </select>

            <input
                class="w-full border p-2"
                placeholder="District"
                value={form.district}
                onInput={(e) => setForm('district', e.currentTarget.value)}
            />

            <input
                class="w-full border p-2"
                type="email"
                placeholder="Email ID"
                value={form.email}
                onInput={(e) => setForm('email', e.currentTarget.value)}
            />

            <input
                class="w-full border p-2"
                placeholder="Contact Number(s)"
                value={form.contact}
                onInput={(e) => setForm('contact', e.currentTarget.value)}
            />

            <textarea
                class="w-full border p-2"
                placeholder="Permanent Address"
                value={form.permanentAddress}
                onInput={(e) => setForm('permanentAddress', e.currentTarget.value)}
            />

            <textarea
                class="w-full border p-2"
                placeholder="Mailing Address"
                value={form.mailingAddress}
                onInput={(e) => setForm('mailingAddress', e.currentTarget.value)}
            />

            <h3 class="text-lg font-semibold mt-6">Work Experience (Last 3 Years)</h3>
            {form.workHistory.map((entry, i) => (
                <div class="grid grid-cols-3 gap-4">
                    <input
                        class="border p-2"
                        placeholder="From (YYYY-MM-DD)"
                        value={entry.from}
                        onInput={(e) => setForm('workHistory', i, 'from', e.currentTarget.value)}
                    />
                    <input
                        class="border p-2"
                        placeholder="To (YYYY-MM-DD)"
                        value={entry.to}
                        onInput={(e) => setForm('workHistory', i, 'to', e.currentTarget.value)}
                    />
                    <input
                        class="border p-2"
                        placeholder="Nature of Work"
                        value={entry.details}
                        onInput={(e) => setForm('workHistory', i, 'details', e.currentTarget.value)}
                    />
                </div>
            ))}
            <button
                type="button"
                class="text-blue-700 text-sm"
                onClick={() => setForm('workHistory', [...form.workHistory, { from: '', to: '', details: '' }])}>
                + Add Row
            </button>

            <h3 class="text-lg font-semibold mt-6">Qualification Details</h3>
            {form.educationHistory.map((entry, i) => (
                <div class="grid grid-cols-4 gap-4">
                    <input
                        class="border p-2"
                        placeholder="Degree/Diploma"
                        value={entry.degree}
                        onInput={(e) => setForm('educationHistory', i, 'degree', e.currentTarget.value)}
                    />
                    <input
                        class="border p-2"
                        placeholder="Institution"
                        value={entry.institution}
                        onInput={(e) => setForm('educationHistory', i, 'institution', e.currentTarget.value)}
                    />
                    <input
                        class="border p-2"
                        placeholder="From (YYYY)"
                        value={entry.from}
                        onInput={(e) => setForm('educationHistory', i, 'from', e.currentTarget.value)}
                    />
                    <input
                        class="border p-2"
                        placeholder="To (YYYY)"
                        value={entry.to}
                        onInput={(e) => setForm('educationHistory', i, 'to', e.currentTarget.value)}
                    />
                </div>
            ))}
            <button
                type="button"
                class="text-blue-700 text-sm"
                onClick={() =>
                    setForm('educationHistory', [...form.educationHistory, { degree: '', institution: '', from: '', to: '' }])
                }>
                + Add Row
            </button>

            <br />

            <button type="submit" class="bg-green-700 text-white px-6 py-2 mt-6">
                Submit
            </button>
        </form>
    );
};

export default IndividualProfile;
