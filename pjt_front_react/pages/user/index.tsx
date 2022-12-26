import TitleText from "../../common/TitleText";
import CardList from "../../component/CardList";
import ClassSelect from "../../common/ClassSelect";
import SearchBar from "../../component/SearchBar";

const UserListPage = () => {
  return (
    <>
      <TitleText>팀원</TitleText>
      <SearchBar />
      <ClassSelect />
      <CardList />
    </>
  );
};

export default UserListPage;
