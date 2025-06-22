import { Show } from 'solid-js';
import { createStore } from 'solid-js/store';

const OrganizationProfile = () => {
    const [form, setForm] = createStore({
        establishmentDate: '',
        orgName: '',
        regNumber: '',
        lastRenewal: '',
        orgType: '',
        otherType: '',
        ntn: '',
        website: '',
        headName: '',
        headDesignation: '',
        headQualification: '',
        socialExp: '',
        eduExp: '',
        turnover1: '',
        year1: '',
        turnover2: '',
        year2: '',
        operatingAreas: '',
        focalName: '',
        focalDesignation: '',
        focalCNIC: '',
        focalContact: '',
    });

    const handleSubmit = (e: Event) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <div class="max-w-2xl mx-auto p-4 space-y-8">
            <h1 class="text-2xl">Annexure A: Organization's Profile</h1>
            <form onSubmit={handleSubmit} class="space-y-4" novalidate>
                <label class="block">
                    Date of Establishment
                    <input
                        type="date"
                        value={form.establishmentDate}
                        onInput={(e) => setForm('establishmentDate', e.target.value)}
                        class="w-full p-2 border"
                        required
                    />
                </label>
                <label class="block">
                    Organization Name
                    <input
                        type="text"
                        value={form.orgName}
                        onInput={(e) => setForm('orgName', e.target.value)}
                        class="w-full p-2 border uppercase"
                        required
                    />
                </label>
                <label class="block">
                    Registration Number
                    <input
                        type="text"
                        value={form.regNumber}
                        onInput={(e) => setForm('regNumber', e.target.value)}
                        class="w-full p-2 border"
                        required
                    />
                </label>
                <label class="block">
                    Date of Last Renewal
                    <input
                        type="date"
                        value={form.lastRenewal}
                        onInput={(e) => setForm('lastRenewal', e.target.value)}
                        class="w-full p-2 border"
                    />
                </label>
                <label class="block">
                    Type of Organization
                    <select
                        value={form.orgType}
                        onChange={(e) => setForm('orgType', e.target.value)}
                        class="w-full p-2 border"
                        required>
                        <option value="">Select</option>
                        <option>Educational Institution</option>
                        <option>Non-Governmental Organization (NGO)</option>
                        <option>Other</option>
                    </select>
                    <Show when={form.orgType === 'Other'}>
                        <input
                            type="text"
                            placeholder="Please specify"
                            value={form.otherType}
                            onInput={(e) => setForm('otherType', e.target.value)}
                            class="w-full p-2 border mt-2"
                        />
                    </Show>
                </label>
                <label class="block">
                    NTN/FTN
                    <input
                        type="text"
                        value={form.ntn}
                        onInput={(e) => setForm('ntn', e.target.value)}
                        class="w-full p-2 border"
                        required
                    />
                </label>
                <label class="block">
                    Website URL (if any)
                    <input
                        type="url"
                        value={form.website}
                        onInput={(e) => setForm('website', e.target.value)}
                        class="w-full p-2 border"
                    />
                </label>

                <h3 class="text-md font-semibold mt-6">Head of Organization</h3>
                <label class="block">
                    Name
                    <input
                        type="text"
                        value={form.headName}
                        onInput={(e) => setForm('headName', e.target.value)}
                        class="w-full p-2 border"
                        required
                    />
                </label>
                <label class="block">
                    Designation
                    <input
                        type="text"
                        value={form.headDesignation}
                        onInput={(e) => setForm('headDesignation', e.target.value)}
                        class="w-full p-2 border"
                        required
                    />
                </label>
                <label class="block">
                    Qualification
                    <input
                        type="text"
                        value={form.headQualification}
                        onInput={(e) => setForm('headQualification', e.target.value)}
                        class="w-full p-2 border"
                        required
                    />
                </label>

                <label class="block">
                    Experience in Social Sector (Years)
                    <input
                        type="number"
                        value={form.socialExp}
                        onInput={(e) => setForm('socialExp', e.target.value)}
                        class="w-full p-2 border"
                        required
                    />
                </label>
                <label class="block">
                    Experience in Education Sector (Years)
                    <input
                        type="number"
                        value={form.eduExp}
                        onInput={(e) => setForm('eduExp', e.target.value)}
                        class="w-full p-2 border"
                        required
                    />
                </label>

                <h3 class="text-md font-semibold mt-6">Financial Information</h3>
                <div class="grid grid-cols-2 gap-4">
                    <label class="block">
                        Turnover (PKR) Year 1
                        <input
                            type="number"
                            value={form.turnover1}
                            onInput={(e) => setForm('turnover1', e.target.value)}
                            class="w-full p-2 border"
                        />
                    </label>
                    <label class="block">
                        Year
                        <input
                            type="text"
                            value={form.year1}
                            onInput={(e) => setForm('year1', e.target.value)}
                            class="w-full p-2 border"
                        />
                    </label>
                    <label class="block">
                        Turnover (PKR) Year 2
                        <input
                            type="number"
                            value={form.turnover2}
                            onInput={(e) => setForm('turnover2', e.target.value)}
                            class="w-full p-2 border"
                        />
                    </label>
                    <label class="block">
                        Year
                        <input
                            type="text"
                            value={form.year2}
                            onInput={(e) => setForm('year2', e.target.value)}
                            class="w-full p-2 border"
                        />
                    </label>
                </div>

                <label class="block">
                    Operating Areas
                    <textarea
                        value={form.operatingAreas}
                        onInput={(e) => setForm('operatingAreas', e.target.value)}
                        class="w-full p-2 border"
                        rows="3"
                    />
                </label>

                <h3 class="text-md font-semibold mt-6">Focal Person Details</h3>
                <label class="block">
                    Name
                    <input
                        type="text"
                        value={form.focalName}
                        onInput={(e) => setForm('focalName', e.target.value)}
                        class="w-full p-2 border"
                        required
                    />
                </label>
                <label class="block">
                    Designation
                    <input
                        type="text"
                        value={form.focalDesignation}
                        onInput={(e) => setForm('focalDesignation', e.target.value)}
                        class="w-full p-2 border"
                        required
                    />
                </label>
                <label class="block">
                    CNIC Number
                    <input
                        type="text"
                        value={form.focalCNIC}
                        onInput={(e) => setForm('focalCNIC', e.target.value)}
                        class="w-full p-2 border"
                        required
                    />
                </label>
                <label class="block">
                    Contact Number
                    <input
                        type="text"
                        value={form.focalContact}
                        onInput={(e) => setForm('focalContact', e.target.value)}
                        class="w-full p-2 border"
                        required
                    />
                </label>

                <button type="submit" class="bg-primary text-white px-6 py-2">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default OrganizationProfile;
