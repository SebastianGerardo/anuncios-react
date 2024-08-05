import { Navigate, Route, Routes } from "react-router-dom";
import { HomeLayout } from "./layouts/HomeLayout/HomeLayout";
import { Home } from "./pages/Home/Home";
import { SignIn } from "./pages/Auth/pages/SignIn/SignIn";
import { RecoverPassword } from "./pages/Auth/pages/RecoverPassword/RecoverPassword";
import { CreatePassword } from "./pages/Auth/pages/CreatePassword/CreatePassword";
import { SignUp } from "./pages/Auth/pages/SignUp/SignUp";
import { AuthLayout } from "./layouts/AuthLayout/AuthLayout";
import { Posts } from "./pages/Dashboard/pages/Posts/Posts";
import { DashboardLayout } from "./layouts/DashboardLayout/DashboardLayout";
import { CreatePost } from "./pages/Dashboard/pages/CreatePost/CreatePost";
import { PrivateRoute } from "./layouts/PrivateRoute/PrivateRoute";
import { useVerifyAccount } from "./hooks/auth/useVerifyAccount";

export const App = () => {
  useVerifyAccount();

  return (
    <Routes>
      <Route path="/" Component={HomeLayout}>
        <Route index Component={Home} />
      </Route>
      <Route path="/auth" Component={AuthLayout}>
        <Route index element={<Navigate to="sign_in" />} />
        <Route path="*" element={<Navigate to="sign_in" />} />
        <Route path="sign_in" Component={SignIn} />
        <Route path="sign_up" Component={SignUp} />
        <Route path="new_password/:token" Component={CreatePassword} />
        <Route path="recover_password/:token" Component={RecoverPassword} />
      </Route>
      <Route
        path="/dashboard/user"
        element={
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        }
      >
        <Route path="*" element={<Navigate to="/dashboard/user/home" />} />
        <Route path="home" Component={Posts} />
        <Route path="create_post" Component={CreatePost} />
      </Route>
    </Routes>
  );
};
