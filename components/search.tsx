
const Search = ({ onClick, defaultValue, onChange }: SearchComponentProps) => {
  return (
    <div className="uin_search">
      <h2 className="uin_search_header">
        Получение информации о штрафе по УИН
      </h2>
      <input
      type="number"
        className="uin_search_input"
        placeholder="Введите УИН"
        onChange={onChange}
        defaultValue={defaultValue}
      />
      <button className="uin_search_btn" onClick={onClick}>
        Найти
      </button>
    </div>
  );
};

export default Search;


interface SearchComponentProps {
  onClick: (e: React.MouseEvent) => void
  defaultValue: any[]
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}