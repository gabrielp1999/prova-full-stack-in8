import * as S from "./styles";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function Table({ personData }) {
  return (
    <S.Wrapper>
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
                {new Date(person.birthday).getFullYear()}
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
          <Tab>1</Tab>
          <Tab>2</Tab>
          <Tab>3</Tab>
        </TabList>

        <TabPanel>
          <table>
            <tr>
              <td>NOME</td>
              <td>Gabriel</td>
            </tr>
            <tr>
              <td>EMAIL</td>
              <td>gabriel.gsm2017@gmail.com</td>
            </tr>
          </table>
        </TabPanel>
        <TabPanel>
          <h2>Deina</h2>
          <h2>Email</h2>
          <h2>Nascimento</h2>
        </TabPanel>

        <TabPanel>
          <h2>Samuel</h2>
          <h2>Email</h2>
          <h2>Nascimento</h2>
        </TabPanel>
      </Tabs>

      <S.Link href="/">
        <S.ImgTopPage src="/icons/topo-pag.svg" />
      </S.Link>
    </S.Wrapper>
  );
}

export default Table;
