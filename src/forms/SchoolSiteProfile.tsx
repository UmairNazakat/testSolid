import { createStore } from 'solid-js/store';

const SchoolSiteProfile = () => {
    const [form, setForm] = createStore({
        district: '',
        taluka: '',
        uc: '',
        deh: '',
        village: '',
        households: '',
        nearestPlace: '',
        gpsE: '',
        gpsN: '',
        category: '',
        enrollment: {
            elementary: '',
            secondary: '',
        },
        building: {
            ownership: '',
            floors: '',
            area: '',
            rooms: '',
            roomSize: '',
        },
        plot: {
            ownership: '',
        },
    });

    const handleSubmit = (e: Event) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <form onSubmit={handleSubmit} class="max-w-3xl mx-auto p-4 space-y-4">
            <h2 class="text-xl font-semibold">School's Site Profile</h2>

            <h3 class="text-lg font-semibold mt-4">1. Geographical / Demographic Information</h3>

            <input
                class="w-full border p-2"
                placeholder="District"
                value={form.district}
                onInput={(e) => setForm('district', e.currentTarget.value)}
            />
            <input
                class="w-full border p-2"
                placeholder="Taluka/Town"
                value={form.taluka}
                onInput={(e) => setForm('taluka', e.currentTarget.value)}
            />
            <input
                class="w-full border p-2"
                placeholder="UC"
                value={form.uc}
                onInput={(e) => setForm('uc', e.currentTarget.value)}
            />
            <input
                class="w-full border p-2"
                placeholder="Deh"
                value={form.deh}
                onInput={(e) => setForm('deh', e.currentTarget.value)}
            />
            <input
                class="w-full border p-2"
                placeholder="Village / Mohalla / Society"
                value={form.village}
                onInput={(e) => setForm('village', e.currentTarget.value)}
            />

            <select
                class="w-full border p-2"
                value={form.households}
                onChange={(e) => setForm('households', e.currentTarget.value)}>
                <option value="">No. of Households</option>
                <option>50-100</option>
                <option>101-200</option>
                <option>201-300</option>
                <option>301-400</option>
                <option>401-500</option>
            </select>

            <input
                class="w-full border p-2"
                placeholder="Nearest Popular Place"
                value={form.nearestPlace}
                onInput={(e) => setForm('nearestPlace', e.currentTarget.value)}
            />

            <input
                class="w-full border p-2"
                placeholder="GPS Coordinates E: DD-MM-SSS"
                value={form.gpsE}
                onInput={(e) => setForm('gpsE', e.currentTarget.value)}
            />
            <input
                class="w-full border p-2"
                placeholder="GPS Coordinates N: DD-MM-SSS"
                value={form.gpsN}
                onInput={(e) => setForm('gpsN', e.currentTarget.value)}
            />

            <select
                class="w-full border p-2"
                value={form.category}
                onChange={(e) => setForm('category', e.currentTarget.value)}>
                <option value="">School Category</option>
                <option>Elementary</option>
            </select>

            <input
                class="w-full border p-2"
                placeholder="Estimated Enrollment (Katchi - VIII)"
                value={form.enrollment.elementary}
                onInput={(e) => setForm('enrollment', 'elementary', e.currentTarget.value)}
            />
            <input
                class="w-full border p-2"
                placeholder="Estimated Enrollment (Katchi - X)"
                value={form.enrollment.secondary}
                onInput={(e) => setForm('enrollment', 'secondary', e.currentTarget.value)}
            />

            <h3 class="text-lg font-semibold mt-6">2. School Infrastructure Information</h3>

            <label class="block">If Building:</label>
            <select
                class="w-full border p-2"
                value={form.building.ownership}
                onChange={(e) => setForm('building', 'ownership', e.currentTarget.value)}>
                <option value="">Ownership Type</option>
                <option>Owned</option>
                <option>Rented</option>
                <option>Donated</option>
            </select>

            <input
                class="w-full border p-2"
                placeholder="No. of Floors"
                value={form.building.floors}
                onInput={(e) => setForm('building', 'floors', e.currentTarget.value)}
            />
            <input
                class="w-full border p-2"
                placeholder="Total Area (Sq. Ft.)"
                value={form.building.area}
                onInput={(e) => setForm('building', 'area', e.currentTarget.value)}
            />
            <input
                class="w-full border p-2"
                placeholder="No. of Rooms"
                value={form.building.rooms}
                onInput={(e) => setForm('building', 'rooms', e.currentTarget.value)}
            />
            <input
                class="w-full border p-2"
                placeholder="Average Room Size"
                value={form.building.roomSize}
                onInput={(e) => setForm('building', 'roomSize', e.currentTarget.value)}
            />

            <label class="block">If Plot:</label>
            <select
                class="w-full border p-2"
                value={form.plot.ownership}
                onChange={(e) => setForm('plot', 'ownership', e.currentTarget.value)}>
                <option value="">Ownership Type</option>
                <option>Owned</option>
                <option>Rented</option>
                <option>Donated</option>
                <option>Other</option>
            </select>

            <button type="submit" class="bg-green-700 text-white px-6 py-2 mt-6">
                Submit
            </button>
        </form>
    );
};

export default SchoolSiteProfile;
