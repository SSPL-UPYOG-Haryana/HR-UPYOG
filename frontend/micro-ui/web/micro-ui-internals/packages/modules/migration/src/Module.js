import React from "react";
import {useRouteMatch } from "react-router-dom";
import MigrationCard from "./components/migrationCard";


export const MigrationModule = ({ stateCode, userType, tenants }) => {
  const moduleCode = "HR";
  const language = Digit.StroeData.getCurrentLanguage();
  const { isLoading, data: store } = Digit.Services.useStore({ stateCode, moduleCode, language });

  Digit.SessionStorage.set("MIGRATION_TENANTS", tenants);
   const { path, url } = useRouteMatch();
  if (!Digit.Utils.migrationAccess()) {
    return null;
  }
  if (userType === "employee") {
    return <EmployeeApp path={path} url={url} />;
  } else return null;
};


const conponentsToRegister = {
  MigrationCard
}


export const initMigrationComponents = () => {
  Object.entries(conponentsToRegister).forEach(([key, value]) => { 
  Digit.ComponentRegistryService.setComponent(key, value);
  });
};