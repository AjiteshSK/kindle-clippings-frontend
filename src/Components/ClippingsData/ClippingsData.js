import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import VirtualizedList from "../virtualizedList";
import dataContext from "../../store";

const ClippingsData = () => {
  const [authors, setAuthors] = useState([]);
  const [titles, setTitles] = useState([]);
  const [contents, setContents] = useState([]);

  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");
  const [indexToScrollTo, setIndexToScrollTo] = useState(undefined);

  const { recievedData } = useContext(dataContext);

  let scrollToAuthor;

  useEffect(() => {
    if (recievedData) {
      const recievedAuthors = recievedData.map((data) => {
        return data.author;
      });

      const uniqueAuthors = [...new Set(recievedAuthors)];
      uniqueAuthors.shift();

      setAuthors(uniqueAuthors);

      const recievedTitles = recievedData.map((data) => {
        return data.title;
      });
      setTitles(recievedTitles);

      const recievedContents = recievedData.map((data) => {
        return data.content;
      });
      setContents(recievedContents);
    }
  }, [recievedData]);

  useEffect(() => {
    let bookBySelectedAuthor = recievedData.map((data) => {
      if (data.author === selectedAuthor) {
        return data.title;
      }
    });

    bookBySelectedAuthor = [...new Set(bookBySelectedAuthor)];
    bookBySelectedAuthor.shift();

    const contentBySelectedAuthor = recievedData.map((data) => {
      if (data.author === selectedAuthor) {
        return data.content;
      }
    });

    setTitles(bookBySelectedAuthor);
    setContents(contentBySelectedAuthor);
  }, [selectedAuthor]);

  useEffect(() => {
    // ScrollToItem in Authors List.
    if (selectedTitle !== "") {
      const selectedEntry = recievedData.find((data) => {
        return data.title === selectedTitle;
      });

      console.log("selectedTitle", selectedEntry);

      if (selectedEntry) {
        const { author: authorOfSelectedTitle } = selectedEntry;

        console.log("authorOfTitle", authorOfSelectedTitle);

        const index = authors.findIndex(
          (author) => author === authorOfSelectedTitle
        );

        console.log("INDEX", index);

        setIndexToScrollTo(index);
      }
    }

    let contentInSelectedBook = recievedData.map((data) => {
      if (data.title === selectedTitle) {
        return data.content;
      }
    });

    setContents(contentInSelectedBook);
  }, [selectedTitle]);

  if (!recievedData) {
    return <>Upload a file first</>;
  }

  return (
    <>
      {/* {authors.map((author) => {
        return <p>{author}</p>;
      })} */}
      <h4>Authors</h4>
      <VirtualizedList
        list={authors}
        setSelectedValue={setSelectedAuthor}
        indexToScrollTo={indexToScrollTo}
      />
      <br></br>
      <h4>Books</h4>
      {/* {titles.map((title) => {
        return <p>{title}</p>;
      })} */}
      <VirtualizedList list={titles} setSelectedValue={setSelectedTitle} />
      <br></br>
      <h4>Highlights</h4>
      {contents.map((content) => {
        return <p>{content}</p>;
      })}
    </>
  );
};

export default ClippingsData;
