import { useTable } from "@refinedev/core";

export const ArticleList: React.FC = () => {
  const { tableQueryResult } = useTable({ meta: { populate: "*" } });
  const articles = tableQueryResult?.data?.data ?? [];

  return (
    <div>
      <h1>Articles</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Status</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr key={article.id}>
              <td>{article.id}</td>
              <td>{article.title}</td>
              <td>{article.status}</td>
              <td>{new Date(article.createdAt).toDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
