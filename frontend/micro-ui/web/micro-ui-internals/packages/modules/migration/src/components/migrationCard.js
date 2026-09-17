import React from "react";
import { useTranslation } from "react-i18next";
import { MigrationModuleCard, PTIcon } from "@upyog/digit-ui-react-components";

const MigrationCard = () => {
  const { t } = useTranslation();

  if (!Digit.Utils.migrationAccess()) {
    return null;
  }

  const propsForMigrateModuleCard = {
    Icon: <PTIcon />,
    moduleName: t("ACTION_TEST_MIGRATION", "MIGRATION").toUpperCase(),
    kpis: [
      {
        count: "-",
        label: "-",
        link: "/digit-ui/employee/migration/inbox",
      },
    ],
    links: [
      {
        label: t("MIGRATION_OPEN", "Open Migration"),
        link: "https://uypyog-migration-frameworks.onrender.com/migration",
        external: true,
      },
    ],
  };

  return <MigrationModuleCard {...propsForMigrateModuleCard} />;
};

export default MigrationCard;