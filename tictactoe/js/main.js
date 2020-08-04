(() => {

  const boardObjects = [
    [
      {
        value: 0,
        coords: [0,0]
      },
      {
        value: 0,
        coords: [0,1]
      },
      {
        value: 0,
        coords: [0,2]
      }
    ],
    [
      {
        value: 0,
        coords: [1,0]
      },
      {
        value: 0,
        coords: [1,1]
      },
      {
        value: 0,
        coords: [1,2]
      }
    ],
    [
      {
      value: 0,
      coords: [2,0]
      },
      {
        value: 0,
        coords: [2,1]
      },
      {
        value: 0,
        coords: [2,2]
      }
    ]
  ];

  let rows = [].slice.call(document.getElementById('container').children);
  let rowOneItems = [].slice.call(rows[0].children);
  let rowTwoItems = [].slice.call(rows[1].children);
  let rowThreeItems = [].slice.call(rows[2].children);
  let player = 'o';
  let currentXArray = [];
  let currentOArray = [];

  const boardElements = [
    rowOneItems,
    rowTwoItems,
    rowThreeItems
  ];

  const initBoard = () => {
    boardElements.forEach((outerEl, outerIndex) => {
      outerEl.forEach((innerEl, innerIndex) => {
        boardElements[outerIndex][innerIndex].innerHTML = boardObjects[outerIndex][innerIndex].value;
        boardElements[outerIndex][innerIndex].addEventListener('click', () => {
          onPlayerMove(outerIndex, innerIndex, player);
          renderPiece(outerIndex, innerIndex);
          gameOverCheck(outerIndex, innerIndex, boardObjects[outerIndex][innerIndex].value);
        })
      });
    });
  };

  const renderPiece = (indexOne, indexTwo) => {
    boardElements[indexOne][indexTwo].style.color = player === 'x' ? 'cyan' : '#fff';
  }

  const onPlayerMove = (indexOne, indexTwo, playerTeam) => {
    const piece = playerTeam === 'x' ? 'o' : 'x';
    boardElements[indexOne][indexTwo].innerHTML = piece;
    boardObjects[indexOne][indexTwo].value = piece;
    player = piece;
  };

  initBoard();

  // ======== FROM HERE DOWN IS EXTRA STUFF: WIN CONDITIONS, ETC ========
  //TODO it will function completely without these extra items.

  const gameOverCheck = (indexOne, indexTwo, value) => {
    const currentCoords = boardObjects[indexOne][indexTwo].coords;
    const winningPatterns = [
      [
        [0,0],
        [0,1],
        [0,2]
      ],
      [
        [1,0],
        [1,1],
        [1,2]
      ],
      [
        [2,0],
        [2,1],
        [2,2]
      ],
      [
        [0,0],
        [1,0],
        [2,0]
      ],
      [
        [0,0],
        [1,1],
        [2,2]
      ],
      [
        [0,2],
        [1,1],
        [2,0]
      ],
      [
        [0,2],
        [1,2],
        [2,2]
      ],
    ];

    value === 'x' ? currentXArray.push(currentCoords) : currentOArray.push(currentCoords);
    // console.log(currentXArray);

    // if currentXArray or currentOArray contain all of one winningPatterns array in any order, return true.
    winningPatterns.forEach((el, ind) => {

    });
  };

})();
