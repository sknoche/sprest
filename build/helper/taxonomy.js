"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Taxonomy Helper Class
 */
var _Taxonomy = /** @class */ (function () {
    function _Taxonomy() {
        var _this = this;
        /**
         * Method to get the terms from the default site collection
         */
        this.getTermsFromDefaultSC = function (termSetName) {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // Get the term group
                _this.getTermGroup().then(function (_a) {
                    var context = _a.context, termGroup = _a.termGroup;
                    // Get the terms
                    var terms = termGroup.get_termSets().getByName(termSetName).getAllTerms();
                    context.load(terms, "Include(CustomProperties, Description, Id, Name, PathOfTerm)");
                    // Execute the request
                    context.executeQueryAsync(function () {
                        // Resolve the promise
                        resolve(_this.getTerms(terms));
                    }, reject);
                });
            });
        };
        /**
         * Method to get the term set from the default site collection
         */
        this.getTermSetFromDefaultSC = function (termSetName) {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // Get the terms
                _this.getTermsFromDefaultSC(termSetName).then(function (terms) {
                    // Resolve the object
                    resolve(_this.toObject(terms));
                });
            });
        };
        /**
         * Method to get a terms from a specified group
         */
        this.getTermsByGroupName = function (termSetName, groupName) {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // Get the term group
                _this.getTermGroup(groupName).then(function (_a) {
                    var context = _a.context, termGroup = _a.termGroup;
                    // Get the "DoD" terms under the "Entities" term group
                    var terms = termGroup.get_termSets().getByName(termSetName).getAllTerms();
                    context.load(terms, "Include(CustomProperties, Description, Id, Name, PathOfTerm)");
                    // Execute the request
                    context.executeQueryAsync(function () {
                        // Resolve the promise
                        resolve(_this.getTerms(terms));
                    }, reject);
                });
            });
        };
        /**
         * Method to get the term set from the default site collection
         */
        this.getTermSetByGroupName = function (termSetName, groupName) {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // Get the terms
                _this.getTermsByGroupName(termSetName, groupName).then(function (terms) {
                    // Resolve the object
                    resolve(_this.toObject(terms));
                });
            });
        };
        /**
         * Private Methods
         */
        /**
         * Method to get the terms
         */
        this.getTerms = function (termSetTerms) {
            var terms = [];
            // Parse the term sets terms
            var enumerator = termSetTerms.getEnumerator();
            while (enumerator.moveNext()) {
                var term = enumerator.get_current();
                // Create the terms
                terms.push({
                    description: term.get_description(),
                    id: term.get_id().toString(),
                    name: term.get_name(),
                    path: term.get_pathOfTerm().split(";"),
                    pathAsString: term.get_pathOfTerm(),
                    props: term.get_customProperties()
                });
            }
            // Sort the terms
            terms.sort(function (a, b) {
                if (a < b) {
                    return -1;
                }
                if (a > b) {
                    return 1;
                }
                return 0;
            });
            // Return the terms
            return terms;
        };
        /**
         * Method to get the term group
         */
        this.getTermGroup = function (groupName) {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // Ensure the core script is loaded
                SP.SOD.executeFunc("sp.js", "SP.Utilities.Utility", function () {
                    // Ensure the taxonomy script is loaded
                    SP.SOD.registerSod("sp.taxonomy.js", SP.Utilities.Utility.getLayoutsPageUrl("sp.taxonomy.js"));
                    SP.SOD.executeFunc("sp.taxonomy.js", "SP.Taxonomy.TaxonomySession", function () {
                        // Get the taxonomy session
                        var context = SP.ClientContext.get_current();
                        var session = SP.Taxonomy.TaxonomySession.getTaxonomySession(context);
                        // See if we are getting a specific group name
                        if (groupName) {
                            // Resolve the promise
                            var termStores_1 = session.get_termStores();
                            context.load(termStores_1, "Include(Groups)");
                            context.executeQueryAsync(function () {
                                // Get the default store
                                var enumerator = termStores_1.getEnumerator();
                                var termStore = enumerator.moveNext() ? enumerator.get_current() : null;
                                if (termStore) {
                                    // Get the term group
                                    var termGroup = termStore.get_groups().getByName(groupName);
                                    context.load(termGroup);
                                    // Resolve the promise
                                    resolve({ context: context, termGroup: termGroup });
                                }
                                else {
                                    // Log
                                    console.error("[gd-sprest] Unable to get the taxonomy store.");
                                    // Reject the promise
                                    reject();
                                }
                            });
                        }
                        else {
                            // Get the default site collection group
                            var termStore = session.getDefaultSiteCollectionTermStore(context.get_site());
                            var termGroup = termStore.getSiteCollectionGroup;
                            context.load(termGroup);
                            // Resolve the promise
                            resolve({ context: context, termGroup: termGroup });
                        }
                    }, reject);
                }, "sp.js");
            });
        };
        /**
         * Method to convert the terms to an object
         */
        this.toObject = function (terms) {
            var root = {};
            // Recursive method to add terms
            var addTerm = function (node, info, path) {
                var term = node;
                var termName = "";
                // Loop for each term
                while (path.length > 0) {
                    // Ensure the term exists
                    termName = path[0];
                    if (term[termName] == null) {
                        // Create the term
                        term[termName] = {};
                    }
                    // Set the term
                    var parent_1 = term;
                    term = term[termName];
                    // Set the parent
                    term.parent = parent_1;
                    // Remove the term from the path
                    path.splice(0, 1);
                }
                // Set the info
                term.info = info;
            };
            // Parse the terms
            for (var i = 0; i < terms.length; i++) {
                var term = terms[i];
                // Add the term
                addTerm(root, term, term.pathAsString.split(";"));
            }
            // Return the root term
            return root;
        };
    }
    return _Taxonomy;
}());
exports.Taxonomy = new _Taxonomy();
//# sourceMappingURL=taxonomy.js.map