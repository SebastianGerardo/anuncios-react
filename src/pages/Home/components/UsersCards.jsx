import { useState } from "react";
// components
// import { Card } from "@/components/Card";
// import { ModalSellerProfile } from "../modals/ModalSellerProfile/ModalSellerProfile";
// hooks
import { useModal } from "@/hooks/general/useModal";


export const UsersCards = () => {
  const [user, setUser] = useState({});
  const { isOpen, closeModal, openModal } = useModal({
    onOpen: (data) => setUser(data || {}),
    onClose: () => setUser({}),
  });

  return (
    <>
      <article className="columns-2 md:columns-3 lg:columns-5 xl:columns-5 ">
        {/* {images.map((image, index) => (
          <Card onClick={() => openModal(image)} key={index} {...image} />
        ))} */}
      </article>
      {/* <ModalSellerProfile user={user} isOpen={isOpen} onClose={closeModal} /> */}
    </>
  );
};

const images = [
  {
    id: 1,
    image: "/prueba/1.jpg",
    alt: "1",
  },
  {
    id: 2,
    image: "/prueba/2.jpg",
    alt: "2",
  },
  {
    id: 3,
    image: "/prueba/3.jpg",
    alt: "3",
  },
  {
    id: 4,
    image: "/prueba/4.jpg",
    alt: "4",
  },
  {
    id: 5,
    image: "/prueba/5.jpg",
    alt: "5",
  },
  {
    id: 6,
    image: "/prueba/6.jpg",
    alt: "6",
  },
  {
    id: 7,
    image: "/prueba/7.jpg",
    alt: "7",
  },
  {
    id: 8,
    image: "/prueba/8.jpg",
    alt: "8",
  },
  {
    id: 9,
    image: "/prueba/1.jpg",
    alt: "1",
  },
  {
    id: 10,
    image: "/prueba/2.jpg",
    alt: "2",
  },
];
