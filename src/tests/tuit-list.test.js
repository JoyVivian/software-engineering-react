import Tuits from "../components/tuits";
import {screen, render} from "@testing-library/react";
import {HashRouter} from "react-router-dom";
import {findAllTuits} from "../services/tuits-service";


const MOCKED_TUITS = [
    {
        _id: "1",
        tuit: "alice's tuit"
    },
    {
        _id: "2",
        tuit: "bob's tuit"
    },
    {
        _id: "3",
        tuit: "charlie's tuit"
    }
];

test('tuit list renders static tuit array', () => {
  // TODO: implement this
  render(
      <HashRouter>
          <Tuits tuits={MOCKED_TUITS}/>
      </HashRouter>);
      const linkElement = screen.getByText(/alice's tuit/i);
      expect(linkElement).toBeInTheDocument();
});

test('tuit list renders async', async () => {
  // TODO: implement this
    const retrievedTuits = await findAllTuits();
    render(
        <HashRouter>
            <Tuits tuits={retrievedTuits}/>
        </HashRouter>
    );
    const linkElement = screen.getByText(/bob's 1st tuit/i);
    expect(linkElement).toBeInTheDocument();
});


