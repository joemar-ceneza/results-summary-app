import Result from './Result';
import Summary from './Summary';

export default function App() {
    return (
        <main className="flex justify-center items-center min-h-screen font-bodyFont capitalize">
            <div className="flex max-w-xl bg-white rounded-3xl shadow-2xl max-sm:flex-col max-sm:max-w-xs">
                <Result />
                <Summary />
            </div>
        </main>
    );
}