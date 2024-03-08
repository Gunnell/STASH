const item = {template:`
<div>

<button type="button"
class="btn btn-primary m-2 float-end"
data-bs-toggle="modal"
data-bs-target="#exampleModal"
@click="addClick()">
    Add Item
</button>

<table class="table table-striped">
<thead>
    <tr>
        <th>
            Item ID
        </th>
        <th>
            Item Name
        </th>
        <th>
            Item Description
        </th>
        <th>
            Item Quantity
        </th>
        <th>
            Item Location
        </th>
        <th>
            Inventory ID
        </th>
        <th>
            Options
        </th>
    </tr>
</thead>
<tbody>
    <tr v-for="itm in items">
        <td>{{itm.ItemID}}</td>
        <td>{{itm.ItemName}}</td>
        <td>{{itm.ItemDescription}}</td>
        <td>{{itm.ItemQuantity}}</td>
        <td>{{itm.ItemLocation}}</td>
        <td>{{itm.InventoryID}}</td>
        <td>
            <button type="button"
            class="btn btn-light mr-1"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            @click="editClick(itm)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                </svg>
            </button>
            <button type="button" @click="deleteClick(itm.ItemID)"
            class="btn btn-light mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                </svg>
            </button>
        

        </td>
    </tr>
</tbody>
</thead>
</table>

<div class="modal fade" id="exampleModal" tabindex="-1"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-lg modal-dialog-centered">
<div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{modalTitle}}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"
        aria-label="Close"></button>
    </div>

    <div class="modal-body">
        <div class="input-group mb-3">
            <span class="input-group-text">Name</span>
            <input type="text" class="form-control" v-model="ItemName">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">Description</span>
            <input type="text" class="form-control" v-model="ItemDescription">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">Quantity</span>
            <input type="text" class="form-control" v-model="ItemQuantity">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">Location</span>
            <input type="text" class="form-control" v-model="ItemLocation">
        </div>
        <div class="input-group mb-3">
            <select class="form-select" v-model="InventoryID">
                <option v-for="inv in inventories" :value="inv.InventoryID">
                    {{inv.InventoryName}}
                </option>
            </select>
        </div>
        <button type="button" @click="createClick()"
        v-if="ItemID==0" class="btn btn-primary">
        Create
        </button>
        <button type="button" @click="updateClick()"
        v-if="ItemID!=0" class="btn btn-primary">
        Update
        </button>



    </div>

</div>
</div>
</div>



</div>


`,



data(){
    return {
        inventories: [],
        items: [],
        modalTitle: "",
        ItemName: "",
        ItemDescription: "",
        ItemQuantity: "",
        ItemLocation: "",
        InventoryID: 0,
        ItemID: 0
    }
},

methods:{
    refreshData(){
        axios.get(variables.API_URL + 'item')
        .then((response)=>{
            this.items = response.data;
        });
        axios.get(variables.API_URL + 'inventory')
        .then((response)=>{
            this.inventories = response.data;
        });
    },
    addClick(){
        this.modalTitle = "Add Item";
        this.ItemID = 0;
        this.ItemName = "";
        this.ItemDescription = "";
        this.ItemQuantity = "";
        this.ItemLocation = "";
        this.InventoryID = 0;

        
    },
    editClick(itm){
        this.modalTitle = "Edit Item";
        this.ItemName = itm.ItemName;
        this.ItemID = itm.ItemID;
        this.ItemDescription = itm.ItemDescription;
        this.ItemQuantity = itm.ItemQuantity;
        this.ItemLocation = itm.ItemLocation;
        this.InventoryID = itm.InventoryID;

    },
    createClick(){
        axios.post(variables.API_URL+"item/",{
            ItemName:this.ItemName,
            ItemDescription:this.ItemDescription,
            ItemQuantity:this.ItemQuantity,
            ItemLocation:this.ItemLocation,
            InventoryID:this.InventoryID

        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });
    },
    updateClick(){
        axios.put(variables.API_URL+"item/",{
            ItemID:this.ItemID,
            ItemName:this.ItemName,
            ItemDescription:this.ItemDescription,
            ItemQuantity:this.ItemQuantity,
            ItemLocation:this.ItemLocation,
            InventoryID:this.InventoryID
        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });
    },
    deleteClick(id){
        if(!confirm("Are you sure?")){
            return;
        }
        axios.delete(variables.API_URL+"item/"+id)
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });

    }

},
mounted:function(){
    this.refreshData();
}



}