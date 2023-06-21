require('dotenv').config()

describe("Create new Purchase Order", function() {
    
    it ("Step 01: Open system and navigate to the Manage Purchase Order application", async function() {
        await ui5.navigation.navigateToApplication ("PurchaseOrder-manage")
    });
    
    it ("Step 02: Login", async function() {
        await ui5.session.login(process.env.USER, process.env.PASSWORD);
        await util.browser.sleep (2000);
    });


    it ('Step 03: Click Create', async function(){
        const selector = {
            "elementProperties": {
                "viewName": "sap.suite.ui.generic.template.ListReport.view.ListReport",
                "metadata": "sap.ui.comp.smartfilterbar.SFBMultiInput",
                "id": "*listReportFilter.filterItemControl_Basic-Purchaseorder"
            }
        }

        const references = browser.config.params.import.data["references"];
        });
    });
