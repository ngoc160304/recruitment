import CompanyList from "../../components/CompanyList";
import Search from "../../components/Search";
import TagList from "../../components/Tag";

const Home = () => {
    return (
        <>
            <Search />
            <TagList />
            <CompanyList />
        </>
    )
}
export default Home;