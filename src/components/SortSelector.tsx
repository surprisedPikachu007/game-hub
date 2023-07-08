import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>Average Rating</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Date added</MenuItem>
        <MenuItem>Release date</MenuItem>
        <MenuItem>Relevance</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
