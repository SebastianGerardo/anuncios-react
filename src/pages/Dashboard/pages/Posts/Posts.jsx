// stores
import { Button } from "@/components";
import { Modal } from "@/components/general/Modal";
import { useUserPosts } from "@/hooks/async/useUserPosts";
import { useModal } from "@/hooks/general/useModal";
import { AnnouncementPublication } from "@/templates/AnnouncementPublication/AnnouncementPublication";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Posts = () => {
  const [announcement, setAnnouncement] = useState({});
  const { data, isLoading } = useUserPosts();

  const { isOpen, openModal, closeModal } = useModal({
    onOpen: (data) => setAnnouncement(data),
    onClose: () => setAnnouncement({}),
  });

  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Publicaciones creadas</h1>
        <Link to="/dashboard/user/create_post" state={{ logged: true }}>
          <Button type="button">Nuevo post</Button>
        </Link>
      </div>

      <div className="flex flex-col gap-2">
        {data &&
          data.length > 0 &&
          data.map((post) => (
            <div
              onClick={() => openModal(post)}
              className="pl-2 pr-4 py-3 cursor-pointer w-full transition-all duration-150 rounded-xl hover:bg-gray-200"
            >
              <p>{post.title}</p>
            </div>
          ))}
      </div>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <AnnouncementPublication data={announcement} />
      </Modal>
    </section>
  );
};
