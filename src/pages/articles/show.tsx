import { IResourceComponentsProps, useShow } from "@refinedev/core";
import { useParams } from "react-router-dom";

export const ArticleShow: React.FC<IResourceComponentsProps> = () => {
  const { slug } = useParams();
  const { queryResult } = useShow({ id: slug, meta: { populate: "*" } });
  const { data, isLoading } = queryResult;
  const record = data?.data;
  return <></>;
};
