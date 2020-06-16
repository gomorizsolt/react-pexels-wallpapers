import React, { useEffect, useReducer } from "react";
import axios from "./axios";
import ImageBox from "./ImageBox";

type State = {
  photos?: Photo[];
  isLoading: boolean;
  isErr: boolean;
};

type Action = { type: "success"; photos: Photo[] } | { type: "failure" };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "success": {
      return {
        ...state,
        isLoading: false,
        photos: action.photos,
      };
    }
    case "failure": {
      return {
        ...state,
        isLoading: false,
        isErr: true,
      };
    }
    default:
      return state;
  }
};

interface SearchResponse {
  next_page: string;
  page: number;
  per_page: number;
  photos: Photo[];
  total_results: number;
}

function App() {
  const [state, dispatch] = useReducer(reducer, {
    isLoading: true,
    isErr: false,
  });

  useEffect(() => {
    axios
      .get<SearchResponse>("/search?query=Cats&per_page=50")
      .then((res) => {
        dispatch({ type: "success", photos: res.data.photos });
      })
      .catch((err) => {
        console.error("Fetch error: ", err);

        dispatch({ type: "failure" });
      });
  }, []);

  const renderPhotos = () =>
    state.photos.map((photo) => <ImageBox key={photo.id} photo={photo} />);

  return (
    <div className="container p-4 mx-auto">
      <header className="flex justify-between items-center py-4 flex-col md:flex-row">
        <h1 className="text-center">
          Lazy Loading Images with the Intersection Observer API
        </h1>
        <a
          className="hover:text-blue-500"
          href="https://github.com/gomorizsolt/react-pexels-wallpapers"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          Source
        </a>
      </header>
      <main>
        <p className="mb-4">As you scroll down, you'll notice the 300x300 placeholder images are replaced once their visibility passes the 100% mark.</p>
        {state.isLoading ? (
          <p className="text-center">Loading ...</p>
        ) : (
          <div className="grid grid-cols-2 gap-2">{renderPhotos()}</div>
        )}
      </main>
    </div>
  );
}

export default App;
