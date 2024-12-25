const tasks = [
  {
    date: "2024-01-01",
    tasks: ["Learn Arrays Basics", "Solve Easy Array Problems"],
  },
  {
    date: "2024-01-02",
    tasks: ["Practice Medium Array Problems", "Solve 2 CSES Array Problems"],
  },
  {
    date: "2024-01-03",
    tasks: ["Revise Array Techniques", "Attempt Hard Array Problems"],
  },
  {
    date: "2024-01-04",
    tasks: ["Learn Strings Basics", "Solve Easy String Problems"],
  },
  {
    date: "2024-01-05",
    tasks: [
      "Practice String Algorithms (KMP, Z-Algorithm)",
      "Solve 2 CSES String Problems",
    ],
  },
  {
    date: "2024-01-06",
    tasks: ["Revise Strings Techniques", "Attempt Hard String Problems"],
  },
  {
    date: "2024-01-07",
    tasks: ["Mock Contest with Array and String Problems"],
  },
  {
    date: "2024-01-08",
    tasks: [
      "Learn Searching Algorithms (Binary Search)",
      "Solve Medium Search Problems",
    ],
  },
  {
    date: "2024-01-09",
    tasks: [
      "Practice Advanced Searching Techniques",
      "Solve 2 CSES Search Problems",
    ],
  },
  {
    date: "2024-01-10",
    tasks: ["Revise Searching Concepts", "Solve Hard Search Problems"],
  },
  {
    date: "2024-01-11",
    tasks: [
      "Learn Sorting Algorithms (QuickSort, MergeSort)",
      "Solve Easy Sorting Problems",
    ],
  },
  {
    date: "2024-01-12",
    tasks: ["Practice Sorting Techniques", "Solve 2 CSES Sorting Problems"],
  },
  {
    date: "2024-01-13",
    tasks: ["Revise Sorting Algorithms", "Attempt Hard Sorting Problems"],
  },
  {
    date: "2024-01-14",
    tasks: ["Mock Contest with Searching and Sorting Problems"],
  },
  {
    date: "2024-01-15",
    tasks: ["Learn Two Pointer Technique", "Solve Easy Two Pointer Problems"],
  },
  {
    date: "2024-01-16",
    tasks: [
      "Practice Medium Two Pointer Problems",
      "Solve 2 CSES Two Pointer Problems",
    ],
  },
  {
    date: "2024-01-17",
    tasks: ["Revise Two Pointer Concepts", "Attempt Hard Two Pointer Problems"],
  },
  {
    date: "2024-01-18",
    tasks: [
      "Learn Sliding Window Technique",
      "Solve Easy Sliding Window Problems",
    ],
  },
  {
    date: "2024-01-19",
    tasks: [
      "Practice Medium Sliding Window Problems",
      "Solve 2 CSES Sliding Window Problems",
    ],
  },
  {
    date: "2024-01-20",
    tasks: [
      "Revise Sliding Window Concepts",
      "Attempt Hard Sliding Window Problems",
    ],
  },
  {
    date: "2024-01-21",
    tasks: ["Mock Contest with Two Pointer and Sliding Window Problems"],
  },
  {
    date: "2024-01-22",
    tasks: ["Learn Basic Dynamic Programming", "Solve Easy DP Problems"],
  },
  {
    date: "2024-01-23",
    tasks: ["Practice Medium DP Problems", "Solve 2 CSES DP Problems"],
  },
  {
    date: "2024-01-24",
    tasks: ["Revise DP Concepts", "Attempt Hard DP Problems"],
  },
  {
    date: "2024-01-25",
    tasks: [
      "Learn Advanced Dynamic Programming",
      "Solve Medium to Hard DP Problems",
    ],
  },
  {
    date: "2024-01-26",
    tasks: ["Practice DP on Trees", "Solve 2 CSES Tree DP Problems"],
  },
  {
    date: "2024-01-27",
    tasks: ["Revise DP on Trees", "Attempt Hard DP Problems"],
  },
  { date: "2024-01-28", tasks: ["Mock Contest with DP and Tree DP Problems"] },
  {
    date: "2024-01-29",
    tasks: ["Learn Greedy Algorithms", "Solve Easy Greedy Problems"],
  },
  {
    date: "2024-01-30",
    tasks: ["Practice Medium Greedy Problems", "Solve 2 CSES Greedy Problems"],
  },
  {
    date: "2024-01-31",
    tasks: ["Revise Greedy Concepts", "Attempt Hard Greedy Problems"],
  },

  // February
  {
    date: "2024-02-01",
    tasks: ["Learn Graph Basics (BFS, DFS)", "Solve Easy Graph Problems"],
  },
  {
    date: "2024-02-02",
    tasks: ["Practice Medium Graph Problems", "Solve 2 CSES Graph Problems"],
  },
  {
    date: "2024-02-03",
    tasks: ["Revise Graph Concepts", "Attempt Hard Graph Problems"],
  },
  {
    date: "2024-02-04",
    tasks: [
      "Learn Minimum Spanning Tree Algorithms (Prim's, Kruskal's)",
      "Solve MST Problems",
    ],
  },
  {
    date: "2024-02-05",
    tasks: [
      "Practice Shortest Path Algorithms (Dijkstra's, Floyd-Warshall)",
      "Solve Shortest Path Problems",
    ],
  },
  {
    date: "2024-02-06",
    tasks: ["Revise MST and Shortest Path", "Attempt Hard Graph Problems"],
  },
  { date: "2024-02-07", tasks: ["Mock Contest with Graph Problems"] },
  {
    date: "2024-02-08",
    tasks: ["Learn Trie Data Structure", "Solve Easy Trie Problems"],
  },
  {
    date: "2024-02-09",
    tasks: ["Practice Medium Trie Problems", "Solve 2 CSES Trie Problems"],
  },
  {
    date: "2024-02-10",
    tasks: ["Revise Trie Concepts", "Attempt Hard Trie Problems"],
  },
  {
    date: "2024-02-11",
    tasks: ["Learn Disjoint Set Union (DSU)", "Solve Easy DSU Problems"],
  },
  {
    date: "2024-02-12",
    tasks: ["Practice Medium DSU Problems", "Solve 2 CSES DSU Problems"],
  },
  {
    date: "2024-02-13",
    tasks: ["Revise DSU Concepts", "Attempt Hard DSU Problems"],
  },
  {
    date: "2024-02-14",
    tasks: ["Learn Segment Tree Basics", "Solve Easy Segment Tree Problems"],
  },
  {
    date: "2024-02-15",
    tasks: [
      "Practice Medium Segment Tree Problems",
      "Solve 2 CSES Segment Tree Problems",
    ],
  },
  {
    date: "2024-02-16",
    tasks: [
      "Revise Segment Tree Concepts",
      "Attempt Hard Segment Tree Problems",
    ],
  },
  {
    date: "2024-02-17",
    tasks: ["Mock Contest with Advanced Data Structure Problems"],
  },
  {
    date: "2024-02-18",
    tasks: [
      "Learn Bit Manipulation Basics",
      "Solve Easy Bit Manipulation Problems",
    ],
  },
  {
    date: "2024-02-19",
    tasks: [
      "Practice Medium Bit Manipulation Problems",
      "Solve 2 CSES Bit Manipulation Problems",
    ],
  },
  {
    date: "2024-02-20",
    tasks: [
      "Revise Bit Manipulation Concepts",
      "Attempt Hard Bit Manipulation Problems",
    ],
  },
  {
    date: "2024-02-21",
    tasks: ["Mock Contest with Bit Manipulation Problems"],
  },
  {
    date: "2024-02-22",
    tasks: [
      "Learn Suffix Arrays and Suffix Trees",
      "Solve Easy Problems on Strings",
    ],
  },
  {
    date: "2024-02-23",
    tasks: [
      "Practice Medium Problems on Suffix Arrays",
      "Solve 2 CSES String Problems",
    ],
  },
  {
    date: "2024-02-24",
    tasks: ["Revise Suffix Arrays and Trees", "Attempt Hard String Problems"],
  },
  {
    date: "2024-02-25",
    tasks: [
      "Learn Fenwick Tree (Binary Indexed Tree)",
      "Solve Easy Fenwick Tree Problems",
    ],
  },
  {
    date: "2024-02-26",
    tasks: [
      "Practice Medium Fenwick Tree Problems",
      "Solve 2 CSES Fenwick Tree Problems",
    ],
  },
  {
    date: "2024-02-27",
    tasks: [
      "Revise Fenwick Tree Concepts",
      "Attempt Hard Fenwick Tree Problems",
    ],
  },
  {
    date: "2024-02-28",
    tasks: ["Mock Contest with Advanced String and Fenwick Tree Problems"],
  },

  // March
  {
    date: "2024-03-01",
    tasks: [
      "Learn Advanced Graph Algorithms (Topological Sort, Tarjan's)",
      "Solve Medium Graph Problems",
    ],
  },
  {
    date: "2024-03-02",
    tasks: [
      "Practice Heavy-Light Decomposition",
      "Solve Tree Decomposition Problems",
    ],
  },
  {
    date: "2024-03-03",
    tasks: ["Revise Graph and Tree Algorithms", "Attempt Hard Graph Problems"],
  },
  {
    date: "2024-03-04",
    tasks: [
      "Learn Divide and Conquer Basics",
      "Solve Easy Divide and Conquer Problems",
    ],
  },
  {
    date: "2024-03-05",
    tasks: [
      "Practice Divide and Conquer with DP",
      "Solve Medium Divide and Conquer Problems",
    ],
  },
  {
    date: "2024-03-06",
    tasks: [
      "Revise Divide and Conquer Techniques",
      "Attempt Hard Divide and Conquer Problems",
    ],
  },
  {
    date: "2024-03-07",
    tasks: ["Mock Contest with Advanced Graph and Divide and Conquer Problems"],
  },
  {
    date: "2024-03-08",
    tasks: [
      "Learn Game Theory Basics (Nim, Grundy Numbers)",
      "Solve Easy Game Theory Problems",
    ],
  },
  {
    date: "2024-03-09",
    tasks: [
      "Practice Game Theory in Competitive Programming",
      "Solve Medium Game Theory Problems",
    ],
  },
  {
    date: "2024-03-10",
    tasks: ["Revise Game Theory Concepts", "Attempt Hard Game Theory Problems"],
  },
  {
    date: "2024-03-11",
    tasks: [
      "Learn Geometry Basics (Convex Hull, Line Intersection)",
      "Solve Easy Geometry Problems",
    ],
  },
  {
    date: "2024-03-12",
    tasks: ["Practice Advanced Geometry", "Solve Medium Geometry Problems"],
  },
  {
    date: "2024-03-13",
    tasks: ["Revise Geometry Concepts", "Attempt Hard Geometry Problems"],
  },
  {
    date: "2024-03-14",
    tasks: ["Mock Contest with Game Theory and Geometry Problems"],
  },
  {
    date: "2024-03-15",
    tasks: [
      "Learn Network Flow Basics (Ford-Fulkerson)",
      "Solve Easy Network Flow Problems",
    ],
  },
  {
    date: "2024-03-16",
    tasks: ["Practice Maximum Flow Variants", "Solve Medium Flow Problems"],
  },
  {
    date: "2024-03-17",
    tasks: ["Revise Flow Concepts", "Attempt Hard Flow Problems"],
  },
  {
    date: "2024-03-18",
    tasks: [
      "Learn Advanced Graph Algorithms (2-SAT, SCC)",
      "Solve Easy SAT Problems",
    ],
  },
  {
    date: "2024-03-19",
    tasks: ["Practice SAT Problems with Graphs", "Solve Medium SAT Problems"],
  },
  {
    date: "2024-03-20",
    tasks: ["Revise Advanced Graph Concepts", "Attempt Hard SAT Problems"],
  },
  {
    date: "2024-03-21",
    tasks: ["Mock Contest with Network Flow and Advanced Graph Problems"],
  },
  {
    date: "2024-03-22",
    tasks: [
      "Learn Segment Tree with Lazy Propagation",
      "Solve Easy Lazy Propagation Problems",
    ],
  },
  {
    date: "2024-03-23",
    tasks: [
      "Practice Persistent Data Structures",
      "Solve Persistent DS Problems",
    ],
  },
  {
    date: "2024-03-24",
    tasks: [
      "Revise Segment Tree and Persistent Data Structures",
      "Attempt Hard Data Structure Problems",
    ],
  },
  {
    date: "2024-03-25",
    tasks: [
      "Learn Heavy-Light Decomposition with Segment Trees",
      "Solve Medium HLD Problems",
    ],
  },
  {
    date: "2024-03-26",
    tasks: [
      "Practice Graphs with Segment Trees",
      "Solve Medium Graph Problems with Segment Trees",
    ],
  },
  {
    date: "2024-03-27",
    tasks: [
      "Revise Graphs and Segment Trees",
      "Attempt Hard Problems Combining Both",
    ],
  },
  {
    date: "2024-03-28",
    tasks: ["Mock Contest with Advanced Segment Tree Problems"],
  },
  {
    date: "2024-03-29",
    tasks: ["Learn Fenwick Tree Basics", "Solve Easy Fenwick Tree Problems"],
  },
  {
    date: "2024-03-30",
    tasks: [
      "Practice Fenwick Trees with Range Queries",
      "Solve Medium Fenwick Tree Problems",
    ],
  },
  {
    date: "2024-03-31",
    tasks: [
      "Revise Fenwick Trees Concepts",
      "Attempt Hard Fenwick Tree Problems",
    ],
  },

  // April
  {
    date: "2024-04-01",
    tasks: ["Learn Advanced Bitmask DP", "Solve Easy Bitmask DP Problems"],
  },
  {
    date: "2024-04-02",
    tasks: [
      "Practice Bitmask DP with Graphs",
      "Solve Medium Bitmask DP Problems",
    ],
  },
  {
    date: "2024-04-03",
    tasks: ["Revise Bitmask DP Concepts", "Attempt Hard Bitmask DP Problems"],
  },
  {
    date: "2024-04-04",
    tasks: [
      "Learn Sqrt Decomposition Basics",
      "Solve Easy Sqrt Decomposition Problems",
    ],
  },
  {
    date: "2024-04-05",
    tasks: [
      "Practice Sqrt Decomposition with Queries",
      "Solve Medium Sqrt Decomposition Problems",
    ],
  },
  {
    date: "2024-04-06",
    tasks: [
      "Revise Sqrt Decomposition Concepts",
      "Attempt Hard Sqrt Decomposition Problems",
    ],
  },
  {
    date: "2024-04-07",
    tasks: ["Mock Contest with Bitmask DP and Sqrt Decomposition Problems"],
  },
  {
    date: "2024-04-08",
    tasks: [
      "Learn String Automata and Aho-Corasick",
      "Solve Easy Automata Problems",
    ],
  },
  {
    date: "2024-04-09",
    tasks: [
      "Practice Advanced Automata Problems",
      "Solve Medium Automata Problems",
    ],
  },
  {
    date: "2024-04-10",
    tasks: ["Revise Automata Concepts", "Attempt Hard Automata Problems"],
  },
  {
    date: "2024-04-11",
    tasks: [
      "Learn Dynamic Connectivity in Graphs",
      "Solve Easy Dynamic Connectivity Problems",
    ],
  },
  {
    date: "2024-04-12",
    tasks: [
      "Practice Graph Connectivity Queries",
      "Solve Medium Connectivity Problems",
    ],
  },
  {
    date: "2024-04-13",
    tasks: [
      "Revise Dynamic Connectivity Concepts",
      "Attempt Hard Connectivity Problems",
    ],
  },
  {
    date: "2024-04-14",
    tasks: ["Mock Contest with Dynamic Connectivity Problems"],
  },
  {
    date: "2024-04-15",
    tasks: [
      "Learn Advanced Optimization Techniques",
      "Solve Easy Optimization Problems",
    ],
  },
  {
    date: "2024-04-16",
    tasks: [
      "Practice Convex Hull Optimization",
      "Solve Medium Optimization Problems",
    ],
  },
  {
    date: "2024-04-17",
    tasks: [
      "Revise Optimization Techniques",
      "Attempt Hard Optimization Problems",
    ],
  },
  {
    date: "2024-04-18",
    tasks: ["Learn Persistent Segment Trees", "Solve Easy Persistent Problems"],
  },
  {
    date: "2024-04-19",
    tasks: [
      "Practice Persistent DS with Lazy Updates",
      "Solve Medium Persistent DS Problems",
    ],
  },
  {
    date: "2024-04-20",
    tasks: [
      "Revise Persistent DS Concepts",
      "Attempt Hard Persistent Problems",
    ],
  },
  {
    date: "2024-04-21",
    tasks: ["Mock Contest with Persistent Data Structures"],
  },
  {
    date: "2024-04-22",
    tasks: ["Learn Modular Arithmetic Basics", "Solve Easy Modular Problems"],
  },
  {
    date: "2024-04-23",
    tasks: [
      "Practice Modular Inverses and Combinatorics",
      "Solve Medium Modular Problems",
    ],
  },
  {
    date: "2024-04-24",
    tasks: ["Revise Modular Arithmetic", "Attempt Hard Modular Problems"],
  },
  {
    date: "2024-04-25",
    tasks: [
      "Learn Advanced Mathematical Techniques",
      "Solve Easy Math Problems",
    ],
  },
  {
    date: "2024-04-26",
    tasks: [
      "Practice Number Theory with Competitive Problems",
      "Solve Medium Math Problems",
    ],
  },
  {
    date: "2024-04-27",
    tasks: [
      "Revise Advanced Mathematics Concepts",
      "Attempt Hard Math Problems",
    ],
  },
  {
    date: "2024-04-28",
    tasks: ["Mock Contest with Modular Arithmetic and Mathematics"],
  },
  {
    date: "2024-04-29",
    tasks: [
      "Learn Advanced Probability and Statistics",
      "Solve Easy Probability Problems",
    ],
  },
  {
    date: "2024-04-30",
    tasks: [
      "Practice Probability in Competitive Programming",
      "Solve Medium Probability Problems",
    ],
  },
  {
    date: "2024-05-01",
    tasks: ["Revise All Learned Topics So Far", "Attempt a Mixed Problem Set"],
  },
  {
    date: "2024-05-02",
    tasks: [
      "Learn Advanced DP Optimizations (SOS DP, Divide and Conquer DP)",
      "Solve Medium DP Problems",
    ],
  },
  {
    date: "2024-05-03",
    tasks: ["Practice Optimization Techniques in DP", "Solve Hard DP Problems"],
  },
  {
    date: "2024-05-04",
    tasks: ["Revise Advanced DP Techniques", "Attempt a Mixed DP Problem Set"],
  },
  {
    date: "2024-05-05",
    tasks: ["Mock Contest with Mixed DP and Optimization Problems"],
  },
  {
    date: "2024-05-06",
    tasks: [
      "Learn Suffix Arrays and Applications",
      "Solve Easy Suffix Array Problems",
    ],
  },
  {
    date: "2024-05-07",
    tasks: [
      "Practice Suffix Arrays with String Matching",
      "Solve Medium Suffix Array Problems",
    ],
  },
  {
    date: "2024-05-08",
    tasks: [
      "Revise Suffix Arrays Concepts",
      "Attempt Hard Suffix Array Problems",
    ],
  },
  {
    date: "2024-05-09",
    tasks: ["Learn Fast Fourier Transform (FFT)", "Solve Easy FFT Problems"],
  },
  {
    date: "2024-05-10",
    tasks: [
      "Practice FFT for Polynomial Multiplication",
      "Solve Medium FFT Problems",
    ],
  },
  {
    date: "2024-05-11",
    tasks: ["Revise FFT Concepts", "Attempt Hard FFT Problems"],
  },
  { date: "2024-05-12", tasks: ["Mock Contest with String and FFT Problems"] },
  {
    date: "2024-05-13",
    tasks: [
      "Learn Advanced Tree Algorithms (Centroid Decomposition)",
      "Solve Easy Centroid Problems",
    ],
  },
  {
    date: "2024-05-14",
    tasks: [
      "Practice Trees with Centroid Decomposition",
      "Solve Medium Tree Problems",
    ],
  },
  {
    date: "2024-05-15",
    tasks: ["Revise Advanced Tree Algorithms", "Attempt Hard Tree Problems"],
  },
  {
    date: "2024-05-16",
    tasks: [
      "Learn Advanced Graph Optimization Techniques",
      "Solve Easy Graph Optimization Problems",
    ],
  },
  {
    date: "2024-05-17",
    tasks: [
      "Practice Graphs with Heavy-Light Decomposition",
      "Solve Medium Graph Problems",
    ],
  },
  {
    date: "2024-05-18",
    tasks: ["Revise Advanced Graph Concepts", "Attempt Hard Graph Problems"],
  },
  {
    date: "2024-05-19",
    tasks: ["Mock Contest with Advanced Graph and Tree Problems"],
  },
  {
    date: "2024-05-20",
    tasks: [
      "Learn Advanced Number Theory (Chinese Remainder Theorem)",
      "Solve Easy Number Theory Problems",
    ],
  },
  {
    date: "2024-05-21",
    tasks: [
      "Practice Number Theory with Modular Arithmetic",
      "Solve Medium Number Theory Problems",
    ],
  },
  {
    date: "2024-05-22",
    tasks: [
      "Revise Number Theory Concepts",
      "Attempt Hard Number Theory Problems",
    ],
  },
  {
    date: "2024-05-23",
    tasks: [
      "Learn Advanced Combinatorics (Inclusion-Exclusion Principle)",
      "Solve Easy Combinatorics Problems",
    ],
  },
  {
    date: "2024-05-24",
    tasks: [
      "Practice Combinatorics in Competitive Programming",
      "Solve Medium Combinatorics Problems",
    ],
  },
  {
    date: "2024-05-25",
    tasks: [
      "Revise Advanced Combinatorics Concepts",
      "Attempt Hard Combinatorics Problems",
    ],
  },
  {
    date: "2024-05-26",
    tasks: ["Mock Contest with Number Theory and Combinatorics Problems"],
  },
  {
    date: "2024-05-27",
    tasks: [
      "Learn Sparse Tables for Range Queries",
      "Solve Easy Sparse Table Problems",
    ],
  },
  {
    date: "2024-05-28",
    tasks: [
      "Practice Sparse Tables for Range Queries",
      "Solve Medium Sparse Table Problems",
    ],
  },
  {
    date: "2024-05-29",
    tasks: [
      "Revise Sparse Tables Concepts",
      "Attempt Hard Sparse Table Problems",
    ],
  },
  {
    date: "2024-05-30",
    tasks: ["Mock Contest with Sparse Table and Advanced Query Problems"],
  },
  {
    date: "2024-05-31",
    tasks: [
      "Revise All Concepts Learned in 5 Months",
      "Attempt a Mixed Problem Set with a Focus on Weak Areas",
    ],
  },
];

// const months = [
//   "January", "February", "March", "April", "May"
// ];

// // // Function to generate calendar for a specific month
// function generateMonthCalendar(monthIndex) {
//   const calendarContainer = document.getElementById("calendar-container");
//   calendarContainer.innerHTML = ""; // Clear existing calendar

//   // Create a month container
//   const monthContainer = document.createElement("div");
//   monthContainer.className = "month-container active";

//   // Add month title
//   const monthTitle = document.createElement("div");
//   monthTitle.className = "month-title";
//   monthTitle.textContent = months[monthIndex];
//   monthContainer.appendChild(monthTitle);

//   // Add the calendar grid
//   const calendarGrid = document.createElement("div");
//   calendarGrid.className = "calendar";
//   const daysInMonth = new Date(2024, monthIndex + 1, 0).getDate(); // Get days in the month

//   for (let day = 1; day <= daysInMonth; day++) {
//     const date = `2024-${String(monthIndex + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
//     const dayTasks = tasks.find(t => t.date === date);

//     // Create a day cell
//     const dayEl = document.createElement("div");
//     dayEl.className = "day";

//     // Add date
//     const dateEl = document.createElement("div");
//     dateEl.className = "date";
//     dateEl.textContent = `Day ${day}`;
//     dayEl.appendChild(dateEl);

//     // Add tasks
//     if (dayTasks) {
//       const taskList = document.createElement("ul");
//       taskList.className = "tasks";

//       dayTasks.tasks.forEach(task => {
//         const taskItem = document.createElement("li");
//         const checkbox = document.createElement("input");
//         checkbox.type = "checkbox";
//         checkbox.style.marginRight = "5px";

//         taskItem.appendChild(checkbox);
//         taskItem.appendChild(document.createTextNode(task));
//         taskList.appendChild(taskItem);
//       });

//       dayEl.appendChild(taskList);
//     } else {
//       // No tasks for this day
//       const noTaskMsg = document.createElement("div");
//       noTaskMsg.textContent = "No tasks";
//       noTaskMsg.style.color = "#999";
//       noTaskMsg.style.fontSize = "12px";
//       dayEl.appendChild(noTaskMsg);
//     }

//     // Append to calendar
//     calendarGrid.appendChild(dayEl);
//   }

//   monthContainer.appendChild(calendarGrid);
//   calendarContainer.appendChild(monthContainer);
// }

// // Navigation functionality
// let currentMonth = 0;
// document.getElementById("prev").addEventListener("click", () => {
//   if (currentMonth > 0) {
//     currentMonth--;
//     updateNavigation();
//     generateMonthCalendar(currentMonth);
//   }
// });

// document.getElementById("next").addEventListener("click", () => {
//   if (currentMonth < months.length - 1) {
//     currentMonth++;
//     updateNavigation();
//     generateMonthCalendar(currentMonth);
//   }
// });

// function updateNavigation() {
//   document.getElementById("prev").disabled = currentMonth === 0;
//   document.getElementById("next").disabled = currentMonth === months.length - 1;
// }

// // Initialize the calendar
// generateMonthCalendar(currentMonth);
// updateNavigation();

// const calendarContainer = document.getElementById("calendar-container");
// const prevButton = document.getElementById("prev");
// const nextButton = document.getElementById("next");
// let currentIndex = 0;

// // Load tasks progress from localStorage
// function loadProgress() {
//   const savedProgress = JSON.parse(localStorage.getItem("dsaProgress")) || {};
//   tasks.forEach((task, index) => {
//     task.completed = savedProgress[task.date] || false;
//   });
// }

// // Save tasks progress to localStorage
// function saveProgress() {
//   const progress = tasks.reduce((acc, task) => {
//     acc[task.date] = task.completed || false;
//     return acc;
//   }, {});
//   localStorage.setItem("dsaProgress", JSON.stringify(progress));
// }

// // Render the current day's tasks
// function renderTasks() {
//   calendarContainer.innerHTML = "";
//   const task = tasks[currentIndex];
//   const taskContainer = document.createElement("div");
//   taskContainer.classList.add("task-container");

//   const dateElement = document.createElement("h2");
//   dateElement.textContent = `Date: ${task.date}`;
//   taskContainer.appendChild(dateElement);

//   task.tasks.forEach((t, i) => {
//     const taskElement = document.createElement("div");
//     const checkbox = document.createElement("input");
//     checkbox.type = "checkbox";
//     checkbox.checked = task.completed;

//     checkbox.addEventListener("change", () => {
//       task.completed = checkbox.checked;
//       saveProgress();
//     });

//     const label = document.createElement("label");
//     label.textContent = t;

//     taskElement.appendChild(checkbox);
//     taskElement.appendChild(label);
//     taskContainer.appendChild(taskElement);
//   });

//   calendarContainer.appendChild(taskContainer);
// }

// // Navigation
// prevButton.addEventListener("click", () => {
//   currentIndex = Math.max(0, currentIndex - 1);
//   renderTasks();
// });

// nextButton.addEventListener("click", () => {
//   currentIndex = Math.min(tasks.length - 1, currentIndex + 1);
//   renderTasks();
// });

// // Initialize
// loadProgress();
// renderTasks();

const months = ["January", "February", "March", "April", "May"];

const calendarContainer = document.getElementById("calendar-container");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
let currentMonth = 0;

// Load tasks progress from localStorage
function loadProgress() {
  const savedProgress = JSON.parse(localStorage.getItem("dsaProgress")) || {};
  tasks.forEach((task) => {
    task.tasks = task.tasks.map((t, i) => ({
      name: t,
      completed: savedProgress[`${task.date}-${i}`] || false,
    }));
  });
}

// Save tasks progress to localStorage
function saveProgress() {
  const progress = {};
  tasks.forEach((task) => {
    task.tasks.forEach((t, i) => {
      progress[`${task.date}-${i}`] = t.completed;
    });
  });
  localStorage.setItem("dsaProgress", JSON.stringify(progress));
}

// Generate calendar for a specific month
function generateMonthCalendar(monthIndex) {
  calendarContainer.innerHTML = ""; // Clear existing calendar

  // Create a month container
  const monthContainer = document.createElement("div");
  monthContainer.className = "month-container active";

  // Add month title
  const monthTitle = document.createElement("div");
  monthTitle.className = "month-title";
  monthTitle.textContent = months[monthIndex];
  monthContainer.appendChild(monthTitle);

  // Add the calendar grid
  const calendarGrid = document.createElement("div");
  calendarGrid.className = "calendar";
  const daysInMonth = new Date(2024, monthIndex + 1, 0).getDate(); // Get days in the month

  for (let day = 1; day <= daysInMonth; day++) {
    const date = `2024-${String(monthIndex + 1).padStart(2, "0")}-${String(
      day
    ).padStart(2, "0")}`;
    const dayTasks = tasks.find((t) => t.date === date);

    // Create a day cell
    const dayEl = document.createElement("div");
    dayEl.className = "day";

    // Add date
    const dateEl = document.createElement("div");
    dateEl.className = "date";
    dateEl.textContent = `Day ${day}`;
    dayEl.appendChild(dateEl);

    // Add tasks
    if (dayTasks) {
      const taskList = document.createElement("ul");
      taskList.className = "tasks";

      dayTasks.tasks.forEach((task, index) => {
        const taskItem = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.style.marginRight = "5px";

        checkbox.addEventListener("change", () => {
          task.completed = checkbox.checked;
          saveProgress();
        });

        taskItem.appendChild(checkbox);
        taskItem.appendChild(document.createTextNode(task.name));
        taskList.appendChild(taskItem);
      });

      dayEl.appendChild(taskList);
    } else {
      // No tasks for this day
      const noTaskMsg = document.createElement("div");
      noTaskMsg.textContent = "No tasks";
      noTaskMsg.style.color = "#999";
      noTaskMsg.style.fontSize = "12px";
      dayEl.appendChild(noTaskMsg);
    }

    // Append to calendar
    calendarGrid.appendChild(dayEl);
  }

  monthContainer.appendChild(calendarGrid);
  calendarContainer.appendChild(monthContainer);
}

// Navigation functionality
prevButton.addEventListener("click", () => {
  if (currentMonth > 0) {
    currentMonth--;
    updateNavigation();
    generateMonthCalendar(currentMonth);
  }
});

nextButton.addEventListener("click", () => {
  if (currentMonth < months.length - 1) {
    currentMonth++;
    updateNavigation();
    generateMonthCalendar(currentMonth);
  }
});

function updateNavigation() {
  prevButton.disabled = currentMonth === 0;
  nextButton.disabled = currentMonth === months.length - 1;
}

// Initialize
loadProgress();
generateMonthCalendar(currentMonth);
updateNavigation();
