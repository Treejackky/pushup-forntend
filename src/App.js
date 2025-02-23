import Home from "./pages/home/index";
import { getLang } from "./utils/tool";
import { Layout } from "./components/layouts/layout";
import { useTranslation } from "react-i18next";

export default function App() {
  const { t } = useTranslation();

  return (
    <>
      <Layout>
        <Home/>
      </Layout>
    </>
  );
}
