import Tuits from "../components/tuits";
import {screen, render} from "@testing-library/react";
import {HashRouter} from "react-router-dom";
import {findAllTuits} from "../services/tuits-service";
import axios from "axios";

//jest.mock('axios');

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


test('tuit list renders mocked', async () => {
    // TODO: implement this
    const mock2 = jest.spyOn(axios, 'get');
    mock2.mockImplementation(() => {
        return Promise.resolve({data: {tuits: MOCKED_TUITS}});
    });

    const response = await findAllTuits();
    const retrievedTuits = response;
    render(
        <HashRouter>
            <Tuits tuits={retrievedTuits}/>
        </HashRouter>
    );
    const tuit = screen.getByText(/bob's 1st tuit/i);
    expect(tuit).toBeInTheDocument();
    mock2.mockRestore();
});