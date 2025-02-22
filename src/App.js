import VideoRecorder from "./pages/monitor/index";
import { getLang } from "./utils/tool";
import { Layout } from "./components/layouts/layout";
import { useTranslation } from "react-i18next";

export default function App() {
  const { t } = useTranslation();

  return (
    <>
      <Layout>
        <h1>{t('welcome')}</h1>
        <VideoRecorder />
      </Layout>
    </>
  );
}
