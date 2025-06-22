import { createStore } from 'solid-js/store';

const ProjectPlan = () => {
    const [form, setForm] = createStore({
        establishmentPlan: '',
        monitoringPlan: '',
        academicSupportPlan: '',
        outreachStrategy: '',
    });

    const handleSubmit = (e: Event) => {
        e.preventDefault();
        console.log(form);
    };

    const wordCount = (text: string) => text.trim().split(/\s+/).filter(Boolean).length;

    return (
        <form onSubmit={handleSubmit} class="max-w-3xl mx-auto p-4 space-y-6">
            <h2 class="text-xl font-semibold">Annexure G – Project Plan</h2>

            <div>
                <label class="block font-medium mb-1">1. School Establishment Plan (max 500 words)</label>
                <textarea
                    class="w-full border p-2 h-40"
                    placeholder="Outline the physical, operational, and administrative setup for the school..."
                    value={form.establishmentPlan}
                    onInput={(e) => setForm('establishmentPlan', e.currentTarget.value)}
                />
                <p class="text-xs text-gray-600">{wordCount(form.establishmentPlan)} / 500 words</p>
            </div>

            <div>
                <label class="block font-medium mb-1">2. School Monitoring Plan (max 500 words)</label>
                <textarea
                    class="w-full border p-2 h-40"
                    placeholder="Describe your system for oversight, attendance, performance, and compliance..."
                    value={form.monitoringPlan}
                    onInput={(e) => setForm('monitoringPlan', e.currentTarget.value)}
                />
                <p class="text-xs text-gray-600">{wordCount(form.monitoringPlan)} / 500 words</p>
            </div>

            <div>
                <label class="block font-medium mb-1">3. Academic Support Plan (max 500 words)</label>
                <textarea
                    class="w-full border p-2 h-40"
                    placeholder="Explain how you’ll ensure academic quality, teacher development, and learning outcomes..."
                    value={form.academicSupportPlan}
                    onInput={(e) => setForm('academicSupportPlan', e.currentTarget.value)}
                />
                <p class="text-xs text-gray-600">{wordCount(form.academicSupportPlan)} / 500 words</p>
            </div>

            <div>
                <label class="block font-medium mb-1">4. Strategy for Bringing Out-of-School Children (max 500 words)</label>
                <textarea
                    class="w-full border p-2 h-40"
                    placeholder="Describe your outreach and enrollment strategy, particularly in underserved areas..."
                    value={form.outreachStrategy}
                    onInput={(e) => setForm('outreachStrategy', e.currentTarget.value)}
                />
                <p class="text-xs text-gray-600">{wordCount(form.outreachStrategy)} / 500 words</p>
            </div>

            <button type="submit" class="bg-green-700 text-white px-6 py-2">
                Submit
            </button>
        </form>
    );
};

export default ProjectPlan;
