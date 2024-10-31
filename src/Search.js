import React from "react";

export default function Search() {
  return (
    <form class="Search" id="search-form">
      <input
        type="search"
        placeholder="What is your city?"
        class="search-form-input"
      />
      <input type="submit" value="Search" class="search-button" />
    </form>
  );
}
