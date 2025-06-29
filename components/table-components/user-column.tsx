"use client";

import { createColumnHelper } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./data-table-column-header";

import { Button } from "@/components/ui/button";
import { Admin } from "@/types/auth";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

const columnHelper = createColumnHelper<Admin>()

export const userColumns = [

  columnHelper.accessor("id", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Id" />
    ),
  }),
   columnHelper.accessor("name", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
  }),
   columnHelper.accessor("email", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
  }),
   columnHelper.accessor("role", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Role" />
    ),
  }),
  
  columnHelper.display({
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;
      if(user.role === 'user'){
        return(
          <Button>Update role to admin</Button>
        )
      }

      return (
        // <Dialog>
        //   <DialogTrigger asChild>
        //     <Button variant="outline">
        //       <LiaUserEditSolid />
        //     </Button>
        //   </DialogTrigger>
        //   <DialogContent className="sm:max-w-[425px]">
        //     <DialogHeader>
        //       <DialogTitle>Edit Role</DialogTitle>
        //       <DialogDescription>
        //         Change role with using the dropdown menu. Click update when you done.
        //       </DialogDescription>
        //     </DialogHeader>
        //     {/* <UserRoleUpdateForm user={user} /> */}
        //     <Card>
        //       <CardHeader>
        //         Update User Role
        //       </CardHeader>
        //       <CardContent>
        //         <Button>Update role to admin</Button>
        //       </CardContent>
        //     </Card>
        //   </DialogContent>
        // </Dialog>

        <Button>Update role user</Button>
      );
    },
  }),
];