// assets
// import PhoneIcon from "@mui/icons-material/Phone";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { VerifiedIcon } from "@/assets/svg/VerifiedIcon";

export const Header = ({ type, user }) => (
  <article>
    <div className="relative">
      <picture className="block w-full h-60 rounded-lg">
        <img
          src="/banner.jpg"
          alt="banner_user"
          className="object-cover w-full h-full rounded-lg"
        />
      </picture>
      <picture className="block absolute bottom-0 m-4 rounded-md w-32 h-32">
        <img src="/user.jpg" alt="" className="w-full h-full rounded-md" />
      </picture>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-[70%_auto]  mt-2 mb-5 ">
      <div className="flex justify-between items-center">
        <span className="flex items-center gap-1 ml-1">
          <h1 className="text-xl font-bold tracking-[.015rem]">
            {user?.names ? user?.names : "Daniela"}
          </h1>
          <div className="w-6 h-6 flex items-center justify-center">
            <VerifiedIcon />
          </div>
        </span>
        <span className="flex gap-2 items-center">
          <button className="bg-[#0D6EFD] hover:bg-[#0B5ED7] transition-all duration-100 text-white rounded-full w-8 h-8 flex items-center justify-center">
            {/* <PhoneIcon sx={{ fontSize: "20px" }} /> */}
          </button>
          <button className="bg-[#198754] hover:bg-[#157347] transition-all duration-100 text-white rounded-full w-8 h-8 flex items-center justify-center">
            {/* <WhatsAppIcon sx={{ fontSize: "20px", marginBottom: "1.1px" }} /> */}
          </button>
        </span>
      </div>
    </div>
  </article>
);
