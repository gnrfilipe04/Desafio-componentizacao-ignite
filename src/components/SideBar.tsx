import { Button } from "./Button";

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface Genres {
  handleClickButton: (id: number) => void;
  selectedGenreId: number;
  genres: GenreResponseProps[];
}

export function SideBar({handleClickButton, selectedGenreId, genres}: Genres) {
  // Complete aqui

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
    </div>

  </nav>
  )
}