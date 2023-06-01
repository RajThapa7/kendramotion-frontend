import MyModal from "../../components/Modal/Modal";

export default function Roadblock({ isOpen, closeModal, imgLink }) {
  return (
    <MyModal {...{ isOpen, closeModal }}>
      <img
        src={imgLink}
        alt="road-block"
        className="w-full aspect-auto max-h-[90vh] object-contain"
        loading="lazy"
      />
    </MyModal>
  );
}
