import classNames from "../../../../utils/classNames";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";

export default function Map({ className }) {
  return (
    <div
      className={classNames(className, "shadow-lg px-6 md:px-10 pb-10 pt-4")}
    >
      <SectionHeader className="mb-6">Location</SectionHeader>
      <p className="font-bold mb-4 text-gray-800 mt-2 ">
        We are located at Gorkha FM Chowk, Kathmandu 44600
      </p>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.6744995475574!2d85.32716877617435!3d27.696453525970593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19dfc1be471f%3A0x1d92feb4e87e28fa!2sKendra%20Motion%20Pictures!5e0!3m2!1sen!2snp!4v1684297534971!5m2!1sen!2snp"
        allowFullScreen=""
        loading="lazy"
        className="w-full h-96 border-0"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
