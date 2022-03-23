--Delete the address with the addressId of 161.
delete from "addresses"
      where "addressId"   = 161
  returning *;
