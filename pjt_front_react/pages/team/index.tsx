import TitleText from '../../common/TitleText';
import CardList from '../../component/CardList';
import ClassSelect from '../../common/ClassSelect';
import StackFilter from '../../component/StackFilter';

const TeamListPage = () => {
  return (
    <>
      <TitleText>팀</TitleText>
      <ClassSelect />
      <StackFilter />
      <CardList />
    </>
  );
};

export default TeamListPage;