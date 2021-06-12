function wizard() {
    let students = [
        "Sam Bridges",
        "Fragile",
        "Die-Hardman",
        "Clifford Unger",
        "Higgs Monaghan",
        "Heartman",
        "Cia",
        "Hideo Kojima",
        "Norman Reedus",
   
    ];
    const group1 = [];
    const group2 = [];
    const group3 = [];
    const groupSize = 3;
    const genRandomNum = () => Math.floor(Math.random() * students.length);
    for (let i = 0; i < students.length; i++) {
      if (group1.length < groupSize) {
        let rInx = genRandomNum();
        group1.push(students[rInx]);
        students = students.filter((i) => i != students[rInx]);
      }
      if (group2.length < groupSize) {
        let rInx = genRandomNum();
        group2.push(students[rInx]);
        students = students.filter((i) => i != students[rInx]);
      } else {
        let rInx = genRandomNum();
        group3.push(students[rInx]);
        students = students.filter((i) => i != students[rInx]);
      }
    }
    return {
      Group1: group1,
      Group2: group2,
      Group3: group3.concat(students),
    };
  }
  const groups = wizard();
  const renderTemplate = Object.keys(groups)
    .map((group) => {
      return (
        group.toLocaleUpperCase() +
        ": " +
        "\n" +
        groups[group].map((i, idx) => ` ${idx + 1}- ${i}`).join("\n") +
        "\n" +
        "------------------------"
      );
    })
    .join("\n");
  console.log(renderTemplate);