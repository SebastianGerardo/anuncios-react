// stores
import { useUserPosts } from "@/hooks/async/useUserPosts";
import { useUserStore } from "@/stores/user.store";
import { AnnouncementPublication } from "@/templates/AnnouncementPublication/AnnouncementPublication";
import { Link } from "react-router-dom";

export const Posts = () => {
  const user = useUserStore((state) => state.user);

  const { data } = useUserPosts()


  return (
    <section>
      <div className="flex justify-between items-center">
        <h1>Publicaciones creadas</h1>
        <Link to="/dashboard/user/create_post" state={{ logged: true }}>
          Crear nueva
        </Link>
      </div>

      <div>
        {/* {data} */}
      </div> 
    </section>
  );
};
