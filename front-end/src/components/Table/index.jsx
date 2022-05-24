import * as S from "./styles";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ItemUser from "../ItemUser";

function Table({ personData }) {
  return (
    <S.Wrapper id="lista">
      <S.Title>LISTA DE CADASTRO</S.Title>

      <S.Table>
        <tbody>
          <S.TableRow className="headerTable borderLeft borderRight">
            <S.TableCollum className="borderLeft headerTable"></S.TableCollum>
            <S.TableCollum className="headerTable">NOME</S.TableCollum>
            <S.TableCollum className="headerTable">EMAIL</S.TableCollum>
            <S.TableCollum className="headerTable">NASCIMENTO</S.TableCollum>
            <S.TableCollum className="headerTable borderRight">
              TELEFONE
            </S.TableCollum>
          </S.TableRow>

          {personData?.map((person, index) => (
            <S.TableRow key={index} className="borderLeft borderRight">
              <S.TableCollum className="borderLeft">{index + 1}</S.TableCollum>
              <S.TableCollum>{person.name}</S.TableCollum>
              <S.TableCollum>{person.email}</S.TableCollum>
              <S.TableCollum>
                {/* {new Date(person.birthday).getFullYear()} */}
                {new Date(person.birthday).toLocaleDateString("pt-br")}
              </S.TableCollum>
              <S.TableCollum className="borderRight">
                {person.phone}
              </S.TableCollum>
            </S.TableRow>
          ))}
        </tbody>
      </S.Table>

      <Tabs className="tabs">
        <TabList>
          {personData?.map((_item, index) => (
            <Tab key={`${index}-number-tab`}>{index + 1}</Tab>
          ))}
        </TabList>

        {personData?.map((item, index) => (
          <TabPanel key={`${index}-item-tab`}>
            <ItemUser personData={item} />
          </TabPanel>
        ))}
      </Tabs>

      <S.Link href="#header">
        <S.ImgTopPage src="/icons/topo-pag.svg" />
      </S.Link>
    </S.Wrapper>
  );
}

export default Table;
