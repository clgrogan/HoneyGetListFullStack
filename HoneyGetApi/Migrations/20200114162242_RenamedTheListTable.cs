using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace HoneyGetApi.Migrations
{
    public partial class RenamedTheListTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Items_HgLists_HgListId",
                table: "Items");

            migrationBuilder.DropTable(
                name: "HgLists");

            migrationBuilder.DropIndex(
                name: "IX_Items_HgListId",
                table: "Items");

            migrationBuilder.DropColumn(
                name: "HgListId",
                table: "Items");

            migrationBuilder.AddColumn<int>(
                name: "TheListId",
                table: "Items",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "TheLists",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TheLists", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Items_TheListId",
                table: "Items",
                column: "TheListId");

            migrationBuilder.AddForeignKey(
                name: "FK_Items_TheLists_TheListId",
                table: "Items",
                column: "TheListId",
                principalTable: "TheLists",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Items_TheLists_TheListId",
                table: "Items");

            migrationBuilder.DropTable(
                name: "TheLists");

            migrationBuilder.DropIndex(
                name: "IX_Items_TheListId",
                table: "Items");

            migrationBuilder.DropColumn(
                name: "TheListId",
                table: "Items");

            migrationBuilder.AddColumn<int>(
                name: "HgListId",
                table: "Items",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "HgLists",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Description = table.Column<string>(type: "text", nullable: true),
                    Name = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HgLists", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Items_HgListId",
                table: "Items",
                column: "HgListId");

            migrationBuilder.AddForeignKey(
                name: "FK_Items_HgLists_HgListId",
                table: "Items",
                column: "HgListId",
                principalTable: "HgLists",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
