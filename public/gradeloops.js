<h1>My Favorite Numbers</h1>
<ul id="numberList"></ul>

<script>
  let list = document.getElementById("numberList");
  for (let i = 1; i <= 5; i++) {
    list.innerHTML += `<li>Number ${i}</li>`;
  }
</script>
