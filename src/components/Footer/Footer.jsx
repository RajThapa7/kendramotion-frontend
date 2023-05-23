export default function Footer() {
  return (
    <footer
      aria-label="Site Footer"
      className="bg-[#010d21] w-[100vw] ml-[calc(50%-50vw)]"
    >
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between text-white">
          <div className="flex flex-col gap-y-2 items-center md:flex-row gap-x-8">
            <a href="#" className="hover:underline">
              Terms & conditions
            </a>
            <a href="#" className="hover:underline">
              Privacy & Policy
            </a>
          </div>
          <p className="text-center mt-4 md:mt-0">
            Copyright &copy; 2023. Kendra Motion Picture. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
