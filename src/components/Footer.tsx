export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-4 text-center ">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} All rights reserved. Developed by{" "}
                <a
                    href="https://sabbirmms.github.io/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                >
                    SabbirMMS
                </a>{" "}
                using Next.js.
            </p>
        </footer>
    );
}
