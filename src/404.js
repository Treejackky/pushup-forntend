import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NotFoundPage = () => {
  const { t } = useTranslation();
  const { lang } = useParams(); // ดึงค่าภาษาจาก URL

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-lg">{t("page_not_found", { defaultValue: "Page Not Found" })}</p>
      <Link to={`/${lang || "en"}`} className="mt-4 text-blue-500">
        {t("back_to_home", { defaultValue: "Back to Home" })}
      </Link>
    </div>
  );
};

export default NotFoundPage;
